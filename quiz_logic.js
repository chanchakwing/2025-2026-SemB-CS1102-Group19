const quizData = [
    {
        q: "According to the 'Concentric Circles' hierarchy of AI, where do Large Language Models (LLMs) fit?",
        a: [
            "They are the broadest field encompassing all AI technologies.",
            "They are a specialized subset of Machine Learning that doesn't use neural networks.",
            "They are models specifically architected for language processing at a massive scale within GenAI.",
            "They are a separate field unrelated to Deep Learning."
        ],
        correct: 2,
        exp: "LLMs are situated deep within the hierarchy as a specific branch of Generative AI (itself a subset of Deep Learning) designed for massive-scale language tasks[cite: 32, 33]."
    },
    {
        q: "What is the primary characteristic of the 'Statistical Language Model (SLM)' stage in NLP evolution?",
        a: [
            "It understands deep semantic meaning through vectors.",
            "It acts as a 'stochastic parrot,' predicting the next word based purely on historical probability.",
            "It uses Self-Attention to understand complex context.",
            "It exhibits 'Emergent Abilities' like reasoning."
        ],
        correct: 1,
        exp: "SLMs like N-gram rely purely on probability and counting occurrences without true semantic understanding[cite: 58, 60]."
    },
    {
        q: "In the Transformer architecture, what does the 'Self-Attention' mechanism allow a model to do?",
        a: [
            "It forces the model to ignore the surrounding words.",
            "It converts images directly into text without using tokens.",
            "It helps the model resolve ambiguity by focusing on relevant words in a sentence to understand context.",
            "It reduces the number of parameters to make the model faster."
        ],
        correct: 2,
        exp: "Self-Attention replicates biological selective attention, allowing the model to focus on contextually relevant words to resolve ambiguity (e.g., distinguishing between a 'bat' as an animal or sports equipment)[cite: 97, 98]."
    },
    {
        q: "How does the provided text distinguish between 'Bias' and 'Unfairness'?",
        a: [
            "They are identical concepts and used interchangeably.",
            "Bias is always harmful, while Unfairness is a technical necessity.",
            "Bias is a neutral technical concept (systematic deviation); Unfairness is a normative judgment when bias produces harmful, unjust outcomes.",
            "Unfairness only occurs in recruitment, while bias only occurs in translation."
        ],
        correct: 2,
        exp: "Bias is a technical concept that can be necessary for learning, but it becomes Unfairness when it results in discriminatory outcomes against protected groups[cite: 116, 118, 125]."
    },
    {
        q: "What is the purpose of 'Reinforcement Learning from Human Feedback (RLHF)' in the post-training phase?",
        a: [
            "To teach the model how to code in Python.",
            "To use reward models that simulate human ratings to align outputs with social values and human preferences.",
            "To increase the model's speed by removing 50% of the data.",
            "To ensure the model only outputs 'Standard' English."
        ],
        correct: 1,
        exp: "RLHF optimizes model preferences through algorithms to make answers closer to human responses and endow the model with social-emotional intelligence[cite: 45, 46]."
    },
    {
        q: "In the recruitment experiment (Discovery 2), how did DeepSeek-V3 perform when evaluating candidates with identical skills but different social attributes?",
        a: [
            "It gave higher scores to male candidates.",
            "It penalized non-native English speakers.",
            "It demonstrated 'Self-Correction' by issuing an identical score of 8.0/10 to all candidates.",
            "It refused to score candidates from non-prestigious schools."
        ],
        correct: 2,
        exp: "DeepSeek-V3 showed absolute statistical uniformity, neutralizing discrimination by focusing strictly on technical merit rather than social labels[cite: 261, 266, 268]."
    },
    {
        q: "To mitigate the 'Prestige Bias' (favoring famous schools) in the Hong Kong context, which prompting technique is recommended?",
        a: [
            "Adversarial Prompting to identify gender bias.",
            "Chain-of-Thought (CoT), requiring the model to list core technical skills and analyze if school brand actually correlates with them.",
            "Role-playing as an EOC Legal Consultant.",
            "Standard Zero-shot prompting."
        ],
        correct: 1,
        exp: "CoT prompting breaks local 'prestige bias' by forcing the AI to think step-by-step about skills versus school names[cite: 293, 294]."
    },
    {
        q: "Research Discovery 1 found that DeepSeek V3.2 exhibited 'micro-biases' in persuasion by automatically using which style for female recipients?",
        a: [
            "Logos-driven, rational, and logical arguments.",
            "Standardized academic tone with no emotional markers.",
            "Pathos-driven, emotional, and communal language focusing on family and support.",
            "Highly aggressive and competitive language."
        ],
        correct: 2,
        exp: "Studies confirmed that models still automate gender-stereotypical styles, aligning women with Pathos (emotion) and men with Logos (logic)[cite: 216, 217, 230]."
    },
    {
        q: "What is the function of the 'Causal Intervention Agent' within the MOMA multi-agent framework?",
        a: [
            "It corrects grammar mistakes in the final answer.",
            "It breaks the 'shortcut connection' between identity markers (like race/gender) and stereotypes.",
            "It translates Cantonese-English mixed code into Standard English.",
            "It searches the web for more training data."
        ],
        correct: 1,
        exp: "The Causal Intervention Agent is designed to break the link between sensitive triggers and stereotypical outputs to ensure social equity[cite: 210]."
    }
];



let currentIdx = 0;
let answers = new Array(quizData.length).fill(null);

const qText = document.getElementById('question-text');
const optCont = document.getElementById('options-container');
const progText = document.getElementById('progress-text');
const progBar = document.getElementById('progress-bar');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const subBtn = document.getElementById('submit-btn');

function render() {
    const item = quizData[currentIdx];
    qText.innerText = `${currentIdx + 1}. ${item.q}`;
    optCont.innerHTML = '';
    
    item.a.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.innerText = opt;
        btn.style.display = 'block';
        btn.style.width = '100%';
        btn.style.textAlign = 'left';
        btn.style.margin = '10px 0';
        btn.style.padding = '12px';
        btn.style.border = '1px solid #ddd';
        btn.style.borderRadius = '5px';
        btn.style.cursor = 'pointer';
        btn.style.backgroundColor = (answers[currentIdx] === i) ? '#e1f0fa' : '#fff';
        
        btn.onclick = () => {
            answers[currentIdx] = i;
            render();
        };
        optCont.appendChild(btn);
    });

    progText.innerText = `Question ${currentIdx + 1} of ${quizData.length}`;
    progBar.style.width = `${((currentIdx + 1) / quizData.length) * 100}%`;
    
    prevBtn.style.visibility = currentIdx === 0 ? 'hidden' : 'visible';
    if (currentIdx === quizData.length - 1) {
        nextBtn.style.display = 'none';
        subBtn.style.display = 'inline-block';
    } else {
        nextBtn.style.display = 'inline-block';
        subBtn.style.display = 'none';
    }
}

nextBtn.onclick = () => { if(currentIdx < quizData.length-1) { currentIdx++; render(); } };
prevBtn.onclick = () => { if(currentIdx > 0) { currentIdx--; render(); } };

subBtn.onclick = () => {
    document.getElementById('question-container').style.display = 'none';
    document.getElementById('result-container').style.display = 'block';
    let score = 0;
    let html = '';
    quizData.forEach((d, i) => {
        const correct = answers[i] === d.correct;
        if(correct) score++;
        html += `<div style="margin-bottom:15px; border-bottom:1px solid #eee; padding-bottom:10px;">
            <p><strong>Q${i+1}: ${d.q}</strong></p>
            <p style="color:${correct?'green':'red'}">Your Answer: ${d.a[answers[i]] || 'Skipped'}</p>
            <p style="font-size:0.85rem; color:#666"><i>Note: ${d.exp}</i></p>
        </div>`;
    });
    document.getElementById('score-display').innerText = score;
    document.getElementById('total-display').innerText = quizData.length;
    document.getElementById('feedback-list').innerHTML = html;
};

document.getElementById('restart-btn').onclick = () => location.reload();

render();
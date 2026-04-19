// Structure - Updated to match your current HTML Navigation
const menuData = [
    { title: "Home", url: "index.html" },
    {
        title: "Generative AI",
        url: "genai.html",
        children: [
            { title: "AI Architecture", url: "genai1.html" },
            { title: "AI Train Flow", url: "genai2.html" },
            { title: "Foundation Model", url: "genai3.html" }
        ]
    },
    {
        title: "Mechanism",
        url: "NLP.html",
        children: [
            { title: "Statistical Language Model (SLM)", url: "NLP_SLM.html" },
            { title: "Neural Language Model (NLM)", url: "NLP_NLM.html" },
            { title: "Pre-Trained Language Model (PLM)", url: "NLP_PLM.html" },
            { title: "Large Language Model (LLM)", url: "NLP_LLM.html" },
            { title: "Comparison", url: "Comparision.html" }
        ]
    },
    {
        title: "Bias",
        url: "bias.html",
        children: [
            { title: "The Source of Bias", url: "bias_source.html" },
            { title: "Measurement of Bias", url: "bias_measurement.html" },
            { title: "Mitigation of Bias", url: "bias_mitigation.html" }
        ]
    },
    {
        title: "Discoveries",
        url: "discovery.html",
        children: [
            { title: "Gender Bias in Tone", url: "discovery_1.html" },
            { title: "LLMs adopt in Hiring", url: "discovery_2.html" },
            { title: "Prompt Engineering", url: "discovery_3.html" },
            { title: "Ideal", url: "discovery_4.html" }
        ]
    },
    { title: "Quiz", url: "quiz.html" }
];

// Function to generate the sitemap
function buildSitemap(data, parentElement) {
    const ul = document.createElement('ul');
    ul.className = "sitemap-list";

    data.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="${item.url}">${item.title}</a>`;

        if (item.children && item.children.length > 0) {
            buildSitemap(item.children, li);
        }
        ul.appendChild(li);
    });

    parentElement.appendChild(ul);
}

// Execution
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('sitemap-render-area');
    if (container) {
        buildSitemap(menuData, container);
    }
});
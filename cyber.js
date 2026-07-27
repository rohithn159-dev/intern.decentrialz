const tips = [
    "Use a strong password and never reuse it across sites.",
    "Beware of suspicious emails asking for personal information.",
    "Keep your software and browser updated to block new threats.",
    "Use two-factor authentication when it is available.",
    "Avoid using public Wi-Fi for banking or sensitive accounts."
];

const tipOutput = document.getElementById("tipOutput");
const showTipBtn = document.getElementById("showTipBtn");

function getRandomTip() {
    return tips[Math.floor(Math.random() * tips.length)];
}

showTipBtn.addEventListener("click", () => {
    tipOutput.textContent = getRandomTip();
});

// Set an initial friendly message.
tipOutput.textContent = "Click the button above to reveal a cybersecurity tip.";

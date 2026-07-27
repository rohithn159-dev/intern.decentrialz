const resultBox = document.getElementById("result");
const userPrompt = document.getElementById("userPrompt");
const generateBtn = document.getElementById("generateBtn");
const poemBtn = document.getElementById("poemBtn");
const moodBtn = document.getElementById("moodBtn");
const surpriseBtn = document.getElementById("surpriseBtn");

function showResult(text) {
  resultBox.textContent = text;
}

function pickRandom(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function generateReply(prompt) {
  const lower = prompt.trim().toLowerCase();
  if (!lower) {
    return "Please type a question or choose one of the buttons to let the AI answer.";
  }

  const greetings = [
    "Hello! I am here to help with your question.",
    "Hi there! Let's explore your idea together.",
    "Nice question! I can give you a friendly answer."
  ];

  if (/(hello|hi|hey|good morning|good evening)/.test(lower)) {
    return pickRandom(greetings);
  }

  if (/(help|how|what|why|when)/.test(lower)) {
    return "That sounds interesting. I suggest trying a small step first and then learning more as you go. You can also ask me another question.";
  }

  if (/(love|friend|feeling|sad|happy)/.test(lower)) {
    return "The AI says: emotions are normal. Talk with someone you trust, and take one positive action today.";
  }

  if (/(weather|sunny|rain|cold|hot)/.test(lower)) {
    return "I may not know the exact weather, but I can help you prepare: carry water, stay comfortable, and enjoy the day.";
  }

  const ideas = [
    "Try breaking your task into smaller pieces and focus on one part at a time.",
    "A friendly idea is to write down a simple plan and then take the first step.",
    "Think like an explorer: ask a question, test one thing, and learn from the result."
  ];
  return pickRandom(ideas);
}

function createPoem() {
  const subjects = ["stars", "a sunrise", "a small bird", "a friendly robot", "a bright idea"];
  const actions = ["whispers", "dances", "dreams", "glows", "smiles"];
  const feelings = ["hope", "joy", "curiosity", "peace", "wonder"];

  return `A ${pickRandom(subjects)} ${pickRandom(actions)} in the night,
It shines with gentle ${pickRandom(feelings)}, soft and bright.
A simple moment makes the world feel right,
And learning something new brings warm light.`;
}

function analyzeMood(prompt) {
  const lower = prompt.trim().toLowerCase();
  if (!lower) {
    return "Your mood seems calm. You can share a feeling or ask the AI for an idea.";
  }

  if (/(happy|great|good|excited|awesome)/.test(lower)) {
    return "Your mood looks positive! Keep that energy and do something creative today.";
  }

  if (/(sad|tired|worried|anxious|stressed)/.test(lower)) {
    return "It seems like you may be feeling down. Take a deep breath, and remember small steps can help you feel better.";
  }

  return "You seem thoughtful. It can be helpful to write down one positive thing from your day.";
}

function surpriseAnswer() {
  const options = [
    generateReply("What should I do today?"),
    createPoem(),
    analyzeMood("How am I feeling?"),
    "AI hint: every challenge is a chance to learn something new."
  ];
  return pickRandom(options);
}

generateBtn.addEventListener("click", () => {
  const prompt = userPrompt.value;
  showResult(generateReply(prompt));
});

poemBtn.addEventListener("click", () => {
  showResult(createPoem());
});

moodBtn.addEventListener("click", () => {
  showResult(analyzeMood(userPrompt.value));
});

surpriseBtn.addEventListener("click", () => {
  showResult(surpriseAnswer());
});

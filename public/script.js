const scriptText = "Hello and welcome to the voice recognition demo.";
const words = scriptText.split(" ");
const scriptElement = document.getElementById("script");

// Display the script as individual spans
words.forEach((word, idx) => {
  const span = document.createElement("span");
  span.textContent = word + " ";
  span.id = `word-${idx}`;
  scriptElement.appendChild(span);
});

let currentWordIndex = 0;

// Web Speech API setup
function startRecognition() {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.continuous = true;
  recognition.interimResults = true;

  recognition.onresult = (event) => {
    const transcript = event.results[event.results.length - 1][0].transcript.trim().toLowerCase();
    const spokenWords = transcript.split(/\s+/);

    // Compare spoken words with the script
    while (currentWordIndex < words.length && spokenWords.includes(words[currentWordIndex].toLowerCase())) {
      document.getElementById(`word-${currentWordIndex}`).classList.add("highlight");
      currentWordIndex++;
    }
  };

  recognition.onerror = (e) => console.error("Speech error:", e);
  recognition.start();
}

// Declare Express
const express = require('express');
const app = express();
const path = require('path');
const PORT = 4000;

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Start the server
app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`Server listening on http://localhost:${PORT}/`);
});


//
// VIEWS
//

// The sentence and word to highlight
const sentence = "I really like to eat a banana every morning.";
const wordToHighlight = "every";

// app.get('/', (req, res) => {
//   const regex = new RegExp(`\\b${wordToHighlight}\\b`, 'gi');
//   const highlightedSentence = sentence.replace(regex, `<span class="highlight">${wordToHighlight}</span>`);
//   res.render('kamislookout', { sentence: highlightedSentence });
// });

app.get('/', (req, res) => {
  const regex = new RegExp(`\\b${wordToHighlight}\\b\\s+(\\w+)`, 'i'); // match word + space + capture next word
  const highlightedSentence = sentence.replace(regex, (match, nextWord) => {
    return match.replace(nextWord, `<span class="highlight">${nextWord}</span>`);
  });

  res.render('kamislookout', { sentence: highlightedSentence });
});

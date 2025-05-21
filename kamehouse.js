// Declare Express
const express = require('express');
const app = express();
const path = require('path');
const PORT = 4000;

// Set EJS as the view engine
app.set('view engine', 'ejs');
// app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Start the server
app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`Server listening on http://localhost:${PORT}/`);
});


//
// VIEWS
//
// Render kamislookout.ejs
app.get('/', (req, res) => {
  res.render('kamislookout.ejs');
});
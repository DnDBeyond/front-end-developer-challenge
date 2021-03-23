const path = require('path');
const express = require('express');
const PORT = process.env.PORT || 8080;

const app = express();

// body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(PORT, function () {
  console.log(`listening on port ${PORT}`);
});

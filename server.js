const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

function handleRequest(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
}

app.get('/*', handleRequest);

app.listen(PORT);

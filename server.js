const express = require('express');
const path = require('path');
const app = express();

// Serve static Ultraviolet files
app.use(express.static(path.join(__dirname, 'dist')));

// Catch-all route to serve main page
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'uv.bundle.js')); // or index.html if it exists
});

module.exports = app;

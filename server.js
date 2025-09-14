const express = require('express');
const path = require('path');
const app = express();

// Serve the Ultraviolet build
app.use(express.static(path.join(__dirname, 'dist')));

// Default route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'uv.bundle.js')); // Or the main HTML if it exists
});

module.exports = app;

const express = require('express');
const path = require('path');
const app = express();

// Use static middleware
app.use(express.static(path.join(process.cwd(), 'dist')));

// Serve index.html for all routes
app.get('*', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'dist', 'index.html'));
});

module.exports = app;

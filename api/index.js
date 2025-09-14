const app = require('../server.js'); // Adjust if server.js is named differently

module.exports = (req, res) => {
  app(req, res); // Vercel serverless function calls Express app
};

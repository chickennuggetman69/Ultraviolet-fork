const app = require('../server.js'); // Make sure this path points to server.js
module.exports = (req, res) => app(req, res);

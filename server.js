// Import using ES6 syntax
import express from 'express';

const PORT = 3000;

// Create Express app
const app = express();

// Handle GET requests with Express routing
app.get('/get', (req, res) => {
  // Express automatically parses query parameters
  const response = {
    args: req.query,
    url: req.url,
    method: req.method
  };
  
  res.json(response);
});

// Use ES6 template literals for console messages
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
  console.log(`Try accessing http://localhost:${PORT}/?param1=value1&param2=value2`);
});

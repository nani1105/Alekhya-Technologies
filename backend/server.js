const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Enable CORS for all routes
app.use(cors());

// Middleware to parse JSON
app.use(express.json());

// Sample route
app.post('/api/contact', (req, res) => {
  const data = req.body;
  console.log('Received contact form data:', data);

  // You can save data to a DB or file here

  res.json({ message: 'Message received successfully!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

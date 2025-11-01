const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Simple API
app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});

// Serve static frontend files if built and placed in ../frontend/build (optional)
const buildPath = path.join(__dirname, '..', 'frontend', 'build');
app.use(express.static(buildPath));
app.get('*', (req, res) => {
  if (req.path.startsWith('/api')) return res.status(404).json({error: 'Not found'});
  res.sendFile(path.join(buildPath, 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

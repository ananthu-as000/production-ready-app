const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date() });
});

// Ready check endpoint
app.get('/ready', (req, res) => {
  res.json({ status: 'ready', timestamp: new Date() });
});

// Main endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Production DevOps Platform!',
    version: '1.0.0',
    timestamp: new Date()
  });
});

// Metrics endpoint
app.get('/metrics', (req, res) => {
  res.send('# HELP app_info Application info\n# TYPE app_info gauge\napp_info 1\n');
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
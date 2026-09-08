/*
const express = require('express');
const app = express();
 
app.get('/', (req, res) => {
    res.send('ok');
});

app.get('/health', (req, res) => {
    res.json({ status: 'ok' });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
*/

const express = require('express');

const app = express();
const PORT = 3000;

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok'
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:3000/health`);
});


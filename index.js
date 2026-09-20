const express = require('express');
//const mongoose = require('mongoose');
const Player = require('./models/Player');

const app = express();
const PORT = 3000;

// Middleware: allow Express to understand JSON request bodies.
app.use(express.json());

// Health check route: confirms the server is running.
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok'
  });
});

// Player API route: hard-coded sample data for now.
app.get('/api/players', (req, res) => {
  const players = [
    {
      name: "Patrick Mahomes",
      position: "QB",
      nflTeam: "Kansas City Chiefs",
      jerseyNumber: 15,
      age: 31,
      experience: 10,
      fantasy: {
      fantasyPoints: 25.6
  }
},
    {
      name: 'CeeDee Lamb',
      position: 'WR',
      team: 'Cowboys',
      points: 275
    },
    {
      name: 'Christian McCaffrey',
      position: 'RB',
      team: '49ers',
      points: 290
    }
  ];

  res.status(200).json(players);
});

// 404 fallback: keep this AFTER all valid routes.
app.use((req, res) => {
  res.status(404).json({
    message: 'Route not found'
  });
});

const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  name: String,
  position: String,
  team: String,
  jerseyNumber: Number,
  fantasyPoints: Number
});

// Start the Express server.
app.listen(3000, () => {
  console.log(`Server running on http://localhost:3000`);
  console.log(`Server running on http://localhost:3000/health`);
  console.log(`Server running on http://localhost:3000/api/players`);
  console.log(`Server running on http://localhost:3000/banana`);
});

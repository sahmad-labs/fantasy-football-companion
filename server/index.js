const express = require('express');
//const mongoose = require('mongoose');
const Player = require('../models/Player');

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
app.get('/api/players', async (req, res) => {
  const players = await Player.find();
  res.status(200).json(players);
});


// 404 fallback: keep this AFTER all valid routes.
app.use((req, res) => {
  res.status(404).json({
    message: 'Route not found'
  });
});

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, { dbName: 'fantasyFootball' })
  .then(() => {
    console.log("MongoDB connected");
    console.log(Player.db.name, Player.collection.name);
  })
  .catch((error) => {
  console.error("MongoDB connection failed:", error.message);
});

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

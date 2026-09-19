const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
  name: String,
  position: String,
  nflTeam: String,
  jerseyNumber: Number,
  age: Number,
  experience: Number,

  skills: {
    speed: Number,
    catching: Number,
    routeRunning: Number
  },

  stats: {
    gamesPlayed: Number,
    receptions: Number,
    receivingYards: Number,
    touchdowns: Number
  },

  fantasy: {
    fantasyPoints: Number,
    projectedPoints: Number,
    averagePoints: Number
  },

  status: String
});

const Player = mongoose.model("Player", playerSchema);

module.exports = Player;
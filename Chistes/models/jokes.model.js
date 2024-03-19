// modelos/jokes.model.js
const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
  setup: String,
  punchline: String,
});

module.exports = mongoose.model('Broma', JokeSchema);


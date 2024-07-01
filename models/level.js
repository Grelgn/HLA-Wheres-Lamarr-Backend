const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const LevelSchema = new Schema({
  name: { type: String, required: true },
  solution: { type: Array, required: true }
});

module.exports = mongoose.model("Level", LevelSchema);
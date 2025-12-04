const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  title: String,
  region: String,
  description: String
});

module.exports = mongoose.model('Recipe', recipeSchema);

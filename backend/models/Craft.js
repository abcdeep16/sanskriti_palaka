const mongoose = require('mongoose');

const craftSchema = new mongoose.Schema({
  name: String,
  description: String,
  artisan: String,
  price: Number,
  originCity: String,
  originState: String
});

module.exports = mongoose.model('Craft', craftSchema);

const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  city: String,
  description: String,
  places: [String]
});

module.exports = mongoose.model('Tour', tourSchema);

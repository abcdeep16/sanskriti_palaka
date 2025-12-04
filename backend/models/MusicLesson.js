const mongoose = require('mongoose');

const musicLessonSchema = new mongoose.Schema({
  title: String,
  level: String,
  description: String
});

module.exports = mongoose.model('MusicLesson', musicLessonSchema);

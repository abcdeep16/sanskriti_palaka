const MusicLesson = require('../models/MusicLesson');

exports.getAll = async (req, res) => {
  const lessons = await MusicLesson.find();
  res.json(lessons);
};

exports.create = async (req, res) => {
  const lesson = await MusicLesson.create(req.body);
  res.status(201).json(lesson);
};

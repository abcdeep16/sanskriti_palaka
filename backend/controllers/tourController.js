const Tour = require('../models/Tour');

exports.getAll = async (req, res) => {
  const tours = await Tour.find();
  res.json(tours);
};

exports.create = async (req, res) => {
  const tour = await Tour.create(req.body);
  res.status(201).json(tour);
};

const Craft = require('../models/Craft');

exports.getAll = async (req, res) => {
  const crafts = await Craft.find();
  res.json(crafts);
};

exports.create = async (req, res) => {
  const craft = await Craft.create(req.body);
  res.status(201).json(craft);
};

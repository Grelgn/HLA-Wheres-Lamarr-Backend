const Level = require("../models/level");

exports.getAllLevels = async (req, res) => {
	const levels = await Level.find();
	res.json(levels);
};

exports.getLevel = async (req, res) => {
	const level = await Level.find({ name: req.params.name });
	res.json(level);
};

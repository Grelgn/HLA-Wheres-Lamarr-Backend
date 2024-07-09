const Record = require("../models/record");

exports.getAllRecords = async (req, res) => {
	const records = await Record.find();
	res.json(records);
};

exports.getRecord = async (req, res) => {
	const record = await Record.findById(req.params.Id);
	res.json(record);
};

exports.startTime = async (req, res) => {
	const record = new Record({
		timeStart: req.body.timeStart,
	});
	await record.save();

	res.json({
		id: `${record._id}`,
		message: `Time started`,
	});
};

exports.updateRecord = async (req, res) => {
	if (req.body.name) {
		await Record.findByIdAndUpdate(req.params.Id, {
			name: req.body.name,
		});
		res.json({
			message: `Added name to Record ID: ${req.params.Id}`,
		});
	} else {
		await Record.findByIdAndUpdate(req.params.Id, {
			timeEnd: Date.now(),
		});
		res.json({
			message: `Added timeEnd to Record ID: ${req.params.Id}`,
		});
	}
};

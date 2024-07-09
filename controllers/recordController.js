const Record = require("../models/record");

exports.getAllRecords = async (req, res) => {
	const records = await Record.find();
	res.json(records);
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

// exports.endTime = async (req, res) => {
// 	await Record.findByIdAndUpdate(req.params.Id, {
// 		timeEnd: Date.now,
// 	});
// };

// exports.submitRecord = async (req, res) => {
// 	if (req.body.name && req.body.time) {
// 		const record = new Record({
// 			name: req.body.name,
// 			time: req.body.time,
// 		});
// 		await record.save();

// 		res.json({
// 			message: `The record has been saved`,
// 		});
// 	} else {
// 		res.sendStatus(406);
// 	}
// };

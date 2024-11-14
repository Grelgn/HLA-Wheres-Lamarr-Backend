const { PrismaClient } = require("@prisma/client");
require("dotenv").config();

const prisma = new PrismaClient();

const getAllRecords = async (req, res) => {
	const records = await prisma.record.findMany();
	res.json(records);
};

const getRecord = async (req, res) => {
	const record = await prisma.record.findFirst({
		where: {
			id: req.params.Id,
		},
	});
	res.json(record);
};

const startTime = async (req, res) => {
	const record = await prisma.record.create({
		data: {
			timeStart: req.body.timeStart,
		},
	});

	res.json({
		id: `${record.id}`,
		message: `Time started`,
	});
};

const updateRecord = async (req, res) => {
	if (req.body.name) {
		await prisma.record.update({
			data: {
				name: req.body.name,
			},
			where: {
				id: req.params.Id,
			},
		});

		res.json({
			message: `Added name to Record ID: ${req.params.Id}`,
		});
	} else {
		await prisma.record.update({
			data: {
				timeEnd: new Date().toISOString(),
			},
			where: {
				id: req.params.Id,
			},
		});

		res.json({
			message: `Added timeEnd to Record ID: ${req.params.Id}`,
		});
	}
};

const deleteAllRecords = async (req, res) => {
	if (req.body.password == process.env.PASSWORD) {
		await prisma.record.deleteMany();

		res.json({
			message: `Deleted all the Records`,
		});
	} else {
		res.status(401).send("Unauthorized");
	}
};

const deleteRecord = async (req, res) => {
	if (req.body.password == process.env.PASSWORD) {
		await prisma.record.delete({
			where: {
				id: req.params.Id,
			},
		});

		res.json({
			message: `Deleted the Record ID: ${req.params.Id}`,
		});
	} else {
		res.status(401).send("Unauthorized");
	}
};

module.exports = {
	getAllRecords,
	getRecord,
	startTime,
	updateRecord,
	deleteAllRecords,
	deleteRecord
};

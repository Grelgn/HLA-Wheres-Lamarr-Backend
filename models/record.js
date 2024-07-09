const mongoose = require("mongoose");
const { DateTime } = require("luxon");

const Schema = mongoose.Schema;

const RecordSchema = new Schema({
	name: { type: String },
	timeStart: { type: Date, default: Date.now },
	timeEnd: { type: Date },
});

RecordSchema.virtual("time").get(function () {
	let time = "";
	if (this.timeStart && this.timeEnd) {
		time = `${this.timeEnd - this.timeStart}`;
	}

	return time;
});

module.exports = mongoose.model("Record", RecordSchema);

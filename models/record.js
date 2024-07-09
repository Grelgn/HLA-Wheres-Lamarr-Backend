const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const opts = { toJSON: { virtuals: true } };
const RecordSchema = new Schema(
	{
		name: { type: String },
		timeStart: { type: Date, default: Date.now },
		timeEnd: { type: Date, default: Date.now },
	},
	opts
);

RecordSchema.virtual("time").get(function () {
	let formatted = "";

	if (this.timeStart && this.timeEnd) {
		let milliseconds = `${this.timeEnd - this.timeStart}`;
		const time = new Date(Date.UTC(0, 0, 0, 0, 0, 0, milliseconds));
		parts = [time.getUTCHours(), time.getUTCMinutes(), time.getUTCSeconds()];

		formatted = parts.map((s) => String(s).padStart(2, "0")).join(":");
		if (formatted.slice(0, 2) == "00") {
			formatted = formatted.slice(3);
		}
	}

	return formatted;
});

module.exports = mongoose.model("Record", RecordSchema);

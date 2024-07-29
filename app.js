const express = require("express");
const path = require("path");
require("dotenv").config();
const cookieParser = require("cookie-parser");


const indexRouter = require("./routes/index");

const app = express();

// Cors
const cors = require("cors");
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
	console.log(`My first Express app - listening on port ${PORT}!`)
);

module.exports = app;

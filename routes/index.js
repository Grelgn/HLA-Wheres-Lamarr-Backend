const express = require("express");
const router = express.Router();

//  Require controller modules
const levelController = require("../controllers/levelController");
const recordController = require("../controllers/recordController");

/* GET home page. */
router.get("/", function (req, res, next) {
	res.render("index", { title: "Express" });
});

// Level
router.get("/level/:name", levelController.getLevel);
router.get("/levels", levelController.getAllLevels);

// Record
router.get("/records", recordController.getAllRecords);
router.get("/record/:Id", recordController.getRecord);
router.post("/record", recordController.startTime);
router.patch("/record/:Id", recordController.updateRecord);

module.exports = router;

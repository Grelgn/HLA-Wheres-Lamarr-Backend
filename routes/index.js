const express = require("express");
const router = express.Router();

//  Require controller modules
const levelController = require("../controllers/levelController");

/* GET home page. */
router.get("/", function (req, res, next) {
	res.render("index", { title: "Express" });
});

// Level
router.get("/level/:name", levelController.getLevel);
router.get("/levels", levelController.getAllLevels);

module.exports = router;

const express = require("express");
const router = express.Router();

//  Require controller modules
const recordController = require("../controllers/recordController");

// Record
router.get("/records", recordController.getAllRecords);
router.get("/record/:Id", recordController.getRecord);
router.post("/record", recordController.startTime);
router.patch("/record/:Id", recordController.updateRecord);

module.exports = router;

var express = require("express");
var router = express.Router();
const { studentController } = require("../controller/index");
router.get("/", studentController.getStudents);
router.post("/createStudent", studentController.createStudents);

module.exports = router;

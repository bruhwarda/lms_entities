var express = require("express");
var router = express.Router();
const { teacherController } = require("../controller/index");
router.get("/", teacherController.getTeachers);
router.post("/createTecher", teacherController.createTechers);

module.exports = router;

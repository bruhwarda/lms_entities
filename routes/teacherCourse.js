var express = require("express");
var router = express.Router();
const { teacherCourseController } = require("../controller/index");
router.get("/", teacherCourseController.getTeacherCourse);
router.post("/createTecherCourse", teacherCourseController.createTeacherCourse);

module.exports = router;

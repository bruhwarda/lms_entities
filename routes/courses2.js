var express = require("express");
var router = express.Router();
const { course2Controller } = require("../controller/index");
router.get("/", course2Controller.getCourses2);
router.post("/createCourse", course2Controller.createCourses2);

module.exports = router;

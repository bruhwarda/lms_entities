const teacherController = require("../teacher/teacherController");
const courseController = require("../course2/course2Controller");
const teacherCourseService = require("../../service/teacherCourse");
module.exports = {
  getTeacherCourse: async (req, res) => {
    const data = await teacherCourseService.getTeacherCourse();
    res.send(data);
  },
  createTeacherCourse: async (req, res) => {
    const { yearsOfExperience, gender, qualification } = req.body; //actually destructuring the object and taking all the keys of the table of user

    const { courseName, creditHours, duration } = req.body;
    const teacher = await teacherController.createTechers({
      yearsOfExperience: yearsOfExperience,
      gender: gender,
      qualification: qualification,
    });
    const course = await courseController.createCourses2({
      courseName: courseName,
      creditHours: creditHours,
      duration: duration,
    });
    const teacher_course = await teacherCourseService.createTeacherCourse({
      teacher_id: teacher.id,
      course_id: course.id,
    });
    res.send(teacher_course);
  },
};

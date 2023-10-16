module.exports = {
  //basically exporting all the elements used
  userController: require("./user/userController"),
  studentController: require("./student/studentController"),

  courseController: require("./courses/CourseController"),

  course2Controller: require("./course2/course2Controller"),
  teacherController: require("./teacher/teacherController"),
  teacherCourseController: require("./teacher_course/teacher_course"),

  //require work as import that we use in react
};

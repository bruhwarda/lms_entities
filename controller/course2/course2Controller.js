const course2Service = require("../../service/course2Service");
const studentController = require("../student/studentController");
const userController = require("../user/userController");
module.exports = {
  getCourses2: async (req, res) => {
    const data = await course2Service.getCourses2();
    res.send(data);
  },
  createCourses2: async (req, res) => {
    const { firstName, lastName, address, email, phoneNumber } = req.body;

    const { semester, department, rollNumber } = req.body;
    const { courseName, creditHours, duration } = req.body; //actually destructuring the object and taking all the keys of the table of user

    const user = await userController.createUsersHelper({
      firstName: firstName,
      lastName: lastName,
      address: address,
      email: email,
      phoneNumber: phoneNumber,
    });
    const student = await studentController.createStudents({
      semester: semester,
      department: department,
      rollNumber: rollNumber,
      userId: user.id,
    });
    const course = await course2Service.createCourses2({
      courseName: courseName,
      creditHours: creditHours,
      duration: duration,
      student_id: student.id,
    });
    res.send(course);
  },
};

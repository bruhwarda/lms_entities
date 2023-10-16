const userController = require("../user/userController");
const studentService = require("../../service/studentService");
module.exports = {
  getStudents: async (req, res) => {
    const data = await studentService.getStudents();
    res.send(data);
  },
  createStudents: async (req, res) => {
    const { firstName, lastName, address, email, phoneNumber} = req.body; //actually destructuring the object and taking all the keys of the table of user
    // console.log({ firstName, lastName, address, email, phoneNumber });
    // console.log(req.body);
    const { semester, department, rollNumber } = req.body;
    const user = await userController.createUsersHelper({
      firstName: firstName,
      lastName: lastName,
      address: address,
      email: email,
      phoneNumber: phoneNumber,
    });
    const students = await studentService.createStudents({
      semester: semester,
      department: department,
      rollNumber: rollNumber,
      userId: user.id,
    });
    res.send(students);
  },
};

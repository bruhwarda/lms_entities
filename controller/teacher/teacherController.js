const teacherService = require("../../service/teacherService");
module.exports = {
  getTeachers: async (req, res) => {
    const data = await teacherService.getTeachers();
    res.send(data);
  },
  createTechers: async (req, res) => {
    const data = await teacherService.createTeachers(req.body);
    res.send(data);
  },
  createTechersHelper: async (data) => {
    const teacherData = await teacherService.createTeachers(data);
    return teacherData;
  },
};

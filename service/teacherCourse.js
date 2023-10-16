const { models } = require("../models/definations/index");
module.exports = {
  getTeacherCourse: async () => {
    const result = await models.teacher_course.findAll(); // jb tk data sara how na ho agly py na jaye
    return result;
  },
  createTeacherCourse: async (data) => {
    console.log(data); //this basically ensures that jb tk table me data create nhi hojata tbh tk wait kry
    const result = await models.teacher_course.create(data);
    console.log(result);
    return result;
  },
};

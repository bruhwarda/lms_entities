const { models } = require("../models/definations/index");
module.exports = {
  getCourses2: async () => {
    const result = await models.course.findAll({
      include: [
        {
          model: models.teacher,
          through: models.teacher_course,
          as: "teachers",
        },
      ],
    }); // jb tk data sara how na ho agly py na jaye
    return result;
  },
  createCourses2: async (data) => {
    console.log(data); //this basically ensures that jb tk table me data create nhi hojata tbh tk wait kry
    const result = await models.course.create(data);
    console.log(result);
    return result;
  },
};

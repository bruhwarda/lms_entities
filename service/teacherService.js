const { models } = require("../models/definations/index");
module.exports = {
  getTeachers: async () => {
    const result = await models.teacher.findAll({
      include: [
        {
          model: models.course,
          through: models.teacher_course,
          as: "courses",
        },
      ],
    }); // jb tk data sara how na ho agly py na jaye
    return result;
  },
  createTeachers: async (data) => {
    console.log(data); //this basically ensures that jb tk table me data create nhi hojata tbh tk wait kry
    const result = await models.teacher.create(data);
    console.log(result);
    return result;
  },
};

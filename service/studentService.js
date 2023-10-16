const { models } = require("../models/definations");
module.exports = {
  getStudents: async () => {
    const result = await models.student.findAll(); // jb tk data sara how na ho agly py na jaye
    return result;
  },
  createStudents: async (data) => {
    console.log(data); //this basically ensures that jb tk table me data create nhi hojata tbh tk wait kry
    const result = await models.student.create(data);
    console.log(result);
    return result;
  },
};

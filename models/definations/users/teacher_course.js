//importing dbConnection
//here we define schemas
const DataTypes = require("sequelize");
let sequelize = require("../../../common/dbConnection");
const teacher_course = sequelize.define(
  "teacher_course",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    teacher_id: {
      type: DataTypes.INTEGER,
    },
    course_id: {
      type: DataTypes.INTEGER,
    },
    qualification: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  },
  {
    //these are global properties
    timestamps: true, //data insert in db so then we provide a time of entry for it
    paranoid: true, //db me se data delete nhi krta mtlb pgADMIN ME PRA HOTA HAI
    sequelize, //instance
    modelName: "teacher_course",
  }
);
module.exports = teacher_course;

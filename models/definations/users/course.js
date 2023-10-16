//importing dbConnection
//here we define schemas
const DataTypes = require("sequelize");
let sequelize = require("../../../common/dbConnection");
const course = sequelize.define(
  "course",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    courseName: {
      unique: true,
      type: DataTypes.STRING,
      allowNull: false, //that this type is required
    },
    creditHours: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    duration: {
      allowNull: true,
      type: DataTypes.STRING,
    },
  },
  {
    //these are global properties
    timestamps: true, //data insert in db so then we provide a time of entry for it
    paranoid: true, //db me se data delete nhi krta mtlb pgADMIN ME PRA HOTA HAI
    sequelize, //instance
    modelName: "course",
  }
);
module.exports = course;

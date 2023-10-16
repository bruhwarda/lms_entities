//importing dbConnection
//here we define schemas
const DataTypes = require("sequelize");
let sequelize = require("../../../common/dbConnection");
const teacher = sequelize.define(
  "teacher",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    yearsOfExperience: {
      type: DataTypes.INTEGER,
      allowNull: true, //that this type is not required
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
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
    modelName: "teacher",
  }
);
module.exports = teacher;

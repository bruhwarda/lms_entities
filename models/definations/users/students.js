//importing dbConnection
//here we define schemas
const DataTypes = require("sequelize");
let sequelize = require("../../../common/dbConnection");
const student = sequelize.define(
  "student",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    rollNumber: {
      unique: true,
      type: DataTypes.STRING,
      allowNull: false, //that this type is not required
    },
    department: {
      unique: true,
      type: DataTypes.STRING,
      allowNull: false,
    },
    semester: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  },
  {
    //these are global properties
    timestamps: true, //data insert in db so then we provide a time of entry for it
    paranoid: true, //db me se data delete nhi krta mtlb pgADMIN ME PRA HOTA HAI
    sequelize, //instance
    modelName: "student",
  }
);
module.exports = student;

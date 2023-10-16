//importing dbConnection
//here we define schemas
//user is the main table
const DataTypes = require("sequelize");
let sequelize = require("../../../common/dbConnection");
const user = sequelize.define(
  "user",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false, //that this type is not required SO JISKO LAZMI KRNA HAI USKO FALSE KRNA HAI
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      unique: true, //because every user has a unique email id
      allowNull: false,
      type: DataTypes.STRING,
      validate: { isEmail: true }, //for validation
    },
    phoneNumber: {
      unique: true,
      allowNull: false,
      type: DataTypes.STRING,
    },
  },
  {
    //these are global properties
    timestamps: true,
    paranoid: true, //db me se data delete nhi krta mtlb pgADMIN ME PRA HOTA HAI
    sequelize, //instance
    modelName: "user",
  }
);
module.exports = user;

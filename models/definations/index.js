//we define relation between these tables
const DataTypes = require("sequelize");
let sequelize = require("../../common/dbConnection");
let user = require("./users/user");
let student = require("./users/students");
let teacher = require("./users/teachers");
let course = require("./users/course");
let teacher_course = require("./users/teacher_course");

//cascade will delete child too when parent will be deleted
//when we define relations we also tell the belongTo also
//the foreign key for student table
user.hasOne(student, {
  onDelete: "CASCADE",
  foreignKey: { name: "userId", allowNull: false, unique: true },
});
//student belong to user
student.belongsTo(user, {
  onDelete: "CASCADE",
  foreignKey: { name: "userId", allowNull: false, unique: true },
});

teacher.belongsToMany(course, {
  through: teacher_course,
  foreignKey: { name: "teacher_id" },
});
course.belongsToMany(teacher, {
  through: teacher_course,
  foreignKey: { name: "course_id" },
});

student.hasMany(course, {
  onDelete: "CASCADE",
});
course.belongsTo(student, {
  onDelete: "CASCADE",
});

//all the models will be returned
const models = sequelize.models;
console.log(models);
const db = {};
//db.sequelize is a key
db.sequelize = sequelize;
module.exports = { db, models };

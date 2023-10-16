const Courses = [
  { id: 1, name: "Maths" },
  { id: 2, name: "Physics" },
  { id: 3, name: "Chemistry" },
];

module.exports = {
  getCourses: (data) => {
    return Courses;
  },
  updateCourse: (data) => {
    const course = Courses.find((c) => c.id === parseInt(data.id)); //find() return all boolean values
    if (!course) {
      return "The course with the given ID was not found."; //404
    } else {
      course.name = data.name;
      return course;
    }
  },
  deleteCourse: (data) => {
    const course = Courses.find((c) => c.id === parseInt(data.id));
    if (!course) {
      return "The course with the given ID was not found."; //404
    } else {
      const index = Courses.indexOf(course);
      Courses.splice(index, 1); //array me se remove krny k liye splice()
      return course;
    }
  },
  createCourse: (data) => {
    const course = {
      id: Courses.length + 1, //increase the lenght and add the id next to lenght
      name: data.name,
    };
    Courses.push(course);
    return course;
  },
};

// Data Model for student
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CourseSchema = new Schema(
  {
    courseID: {type: String},
    courseName: {type: String},
    instructorName: {type: String},
  }
);

module.exports = mongoose.model("course", CourseSchema);
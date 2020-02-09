// Data Model for student
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StudentSchema = new Schema(
  {
    studID: {type: String},
    name: {type: String},
    programName: {type: String},
    courseName: {type: String},
    /*courseName: {
        type: Schema.Types.ObjectId,
        ref: 'Course'
    },*/
    year: {type: String},
  }
);

/*const CourseSchema = new Schema(
  {
    courseID: {type: String},
    courseName: {type: String},
  }
);

const ClassSchema = new Schema(
  {
    classID: {type: String},
    className: {type: String},
    instructorName: {type: String},
  }
);
const InstructorSchema = new Schema(
  {
    instructorID: {type: String},
    instructorName: {type: String},
  } 
);
*/
// Export model
module.exports = mongoose.model("student", StudentSchema);
/*
module.exports = mongoose.model("program", CourseSchema);
module.exports = mongoose.model("course", ClassSchema);
module.exports = mongoose.model("instructor", InstructorSchema);
*/
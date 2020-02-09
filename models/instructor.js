// Data Model for course
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InstructorSchema = new Schema(
  {
    instructorID: {type: String},
    instructorName: {type: String},
  }
);

// Export model
module.exports = mongoose.model("instructor", InstructorSchema);

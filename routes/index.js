// Route handlers
const express = require('express');
const router = express.Router()

//import data models
const Student = require("../models/student");
const Course = require("../models/course");
const Instructor = require("../models/instructor");

// RETREIVE all students
/*
router.get("/", function(req,res){
  Student.find({}, function (err, student_list){
    res.render("index", {students:student_list});
  });
    Course.find({}, function (err, course_list){
    res.render("index", {courses:course_list});
  });
   Instructor.find({}, function (err, instructor_list){
    res.render("index", {instructors:instructor_list});
  });
});
*/

router.get("/", function(req,res){

  Student.find({}, function (err, student_list){

    Course.find({}, function (err, course_list){

      Instructor.find({}, function (err, instructor_list){

        res.render("index", {

          students:student_list,

          courses:course_list,

          instructors:instructor_list

        });

      });

    });

  });

});

// RETREIVE all classes
/*router.get("/", function(req,res){
  Course.find({}, function (err, course_list){
    res.render("index", {courses:course_list});
  });
});
*/
module.exports = router;
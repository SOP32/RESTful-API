// Route handlers
const express = require('express');
const router = express.Router()


const Course = require("../models/course");

// RETREIVE all courses
router.get("/", function(req,res){
  Course.find({}, function (err, course_list){
    res.json(course_list);
  });
});

// RETRIEVE a specific course
router.get("/:courseId", function(req, res){
  Course.findById(req.params.courseId, function(err, course) {
    res.json(course)
  });
});


//CREATE course
router.post('/', function(req, res){
  let course = new Course(req.body);
  course.save();
  res.status(201).send(course);
});

//UPDATE course
router.put("/:courseId", function(req, res) {
  Course.findById(req.params.courseId, function(err, course) {
    course.courseID = req.body.courseID;
    course.courseName = req.body.courseName;
    course.instructorName = req.body.instructorName;
    course.save();
    res.json(course);
  });
});

//DELETE course
router.delete("/:courseId", function(req, res){
  Course.findById(req.params.courseId, function(err, course) {
    course.remove(function(err){
        if(err){
          res.status(500).send(err);
        }
        else{
          res.status(204).send('removed');
        }
    });
  });
});

module.exports = router;
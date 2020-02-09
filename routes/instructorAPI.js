// Route handlers
const express = require('express');
const router = express.Router()


const Instructor = require("../models/instructor");

// RETREIVE all courses
router.get("/", function(req,res){
  Instructor.find({}, function (err, instructor_list){
    res.json(instructor_list);
  });
});

// RETRIEVE a specific course
router.get("/:instructorId", function(req, res){
  Instructor.findById(req.params.instructorId, function(err, instructor) {
    res.json(instructor)
  });
});


//CREATE course
router.post('/', function(req, res){
  let instructor = new Instructor(req.body);
  instructor.save();
  res.status(201).send(instructor);
});

//UPDATE course
router.put("/:instructorId", function(req, res) {
  Instructor.findById(req.params.instructorId, function(err, instructor) {
    instructor.instructorID = req.body.instructorID;
    instructor.instructorName = req.body.instructorName;
    instructor.save();
    res.json(instructor);
  });
});

//DELETE course
router.delete("/:instructorId", function(req, res){
  Instructor.findById(req.params.instructorId, function(err, instructor) {
    instructor.remove(function(err){
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
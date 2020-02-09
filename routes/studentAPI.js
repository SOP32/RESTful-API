// Route handlers
const express = require('express');
const router = express.Router()

//import data models
const Student = require("../models/student");

// RETREIVE all students
router.get("/", function(req,res){
  Student.find({}, function (err, student_list){
    res.json(student_list);
  });
});

// RETRIEVE a specific student
router.get("/:studentId", function(req, res){
  Student.findById(req.params.studentId, function(err, student) {
    res.json(student)
  });
});


// RETRIEVE a specific course
router.get("/:studentId/courses", function(req, res){
  Student.findById(req.params.studentId, function(err, student) {
    res.json(student.courseName)
  });
});

//CREATE student
router.post('/', function(req, res){
  let student = new Student(req.body);
  student.save();
  /*student.save(function(error) {
    if (!error) {
        Student.find({})
            .populate('courseName')
            .exec(function(error, student) {
                console.log(JSON.stringify(student, null, "\t"))
            })
    }
});
*/
  res.status(201).send(student);
});

//UPDATE student
router.put("/:studentId", function(req, res) {
  Student.findById(req.params.studentId, function(err, student) {
    student.studID = req.body.studID;
    student.name = req.body.name;
    student.programName = req.body.programName;
    student.courseName = req.body.courseName;
    student.year = req.body.year;
    student.save();
    res.json(student);
  });
});


//DELETE student
router.delete("/:studentId", function(req, res){
  Student.findById(req.params.studentId, function(err, student) {
    student.remove(function(err){
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
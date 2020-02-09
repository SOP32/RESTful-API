
// init project
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


// Establish a connection with the Mongo Database
// Get the username, password, host, and databse from the .env file
const mongoDB = ("mongodb+srv://"+
                 process.env.USERNAME+
                 ":"
                 +process.env.PASSWORD+
                 "@"
                 +process.env.HOST+
                 "/"
                 +process.env.DATABASE);
mongoose.connect(mongoDB, {useNewUrlParser: true, retryWrites: true});

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// set the view engine
app.set("view engine", "ejs")
app.set("views", __dirname + "/views/");

const studentRouter = require("./routes/studentAPI");
const courseRouter = require("./routes/courseAPI");
const instructorRouter = require("./routes/instructorAPI");
const indexRouter = require("./routes/index");


app.use("/", indexRouter);
app.use("/api/student", studentRouter);
app.use("/api/course", courseRouter);
app.use("/api/instructor", instructorRouter);

/*
// Load routes
const apiRouter = require("./routes/api");
const indexRouter = require("./routes/index");

app.use("/", indexRouter);
app.use("/api/student", apiRouter);
//app.use("/api/program", apiRouter);
app.use("/api/course", apiRouter);
//app.use("/api/instructor", apiRouter);

*/

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});

CRUD Application Example

Uses Express.js and Mongoose to connect to a [Mongo Atlas](https://www.mongodb.com/cloud/atlas) database.

This is a Glitch adaptation of the [building a restful api with express and mongodb](https://dev.to/aurelkurtula/building-a-restful-api-with-express-and-mongodb--3mmh) tutorial on Dev.to.



Data Models: students, courses, instructors

API tests with Postman

`GET /api/students`

To get all the students:

`https://twilight-wealth.glitch.me/api/student`


`GET /api/courses`

To get all the courses:

`https://twilight-wealth.glitch.me/api/course`


`GET /api/instructors`

To get all the instructors:

`https://twilight-wealth.glitch.me/api/instructor`



Get students by their ID

`https://twilight-wealth.glitch.me/api/student/5c8d7b6001f4dd689558b46d`
```json
{
        "studID": "120906002",
        "name": "Ed Sheeran",
        "programName": "Music",
        "courseName": "Song Writing",
        "year": "2005"
}
```

`https://twilight-wealth.glitch.me/api/student/5c8d7bbd01f4dd689558b46e`
```json
{
        "studID": "120906222",
        "name": "Jimmy Fallon",
        "programName": "Entertainment Business",
        "courseName": "Product Development",
        "year": "2000"
}
```

`https://twilight-wealth.glitch.me/api/student/5c8d7c0e01f4dd689558b46f`
```json
{
        "studID": "120907013",
        "name": "Satya Nadella",
        "programName": "Electronics Engineering",
        "courseName": "Power Electronic",
        "year": "2003"
}
```

`https://twilight-wealth.glitch.me/api/student/5c8d7c5301f4dd689558b470`
```json
{
        "studID": "120902045",
        "name": "Meryl Streep",
        "programName": "Dramatic Arts",
        "courseName": "Theatre dance",
        "year": "1995"
}
```

`https://twilight-wealth.glitch.me/api/student/5c8d7cb201f4dd689558b471`
```json
{
        "studID": "120907000",
        "name": "Sohini Palit",
        "programName": "Information Science",
        "courseName": "Web Technology",
        "year": "2019"
}
```

`https://twilight-wealth.glitch.me/api/student/5c92d45014d55c0e339d298a`
```json
{
        "studID": "120906002",
        "name": "Ed Sheeran",
        "programName": "Music",
        "courseName": "Keyboard class",
        "year": "2005"
}
```

`https://twilight-wealth.glitch.me/api/student/5c92da559ac39a0ede1b4847`
```json
{
        "studID": "120906002",
        "name": "Ed Sheeran",
        "programName": "Music",
        "courseName": "Guitar Lesson",
        "year": "2005"
}
```

`https://twilight-wealth.glitch.me/api/student/5c92df9963b05413edf2a873`
```json
{
        "studID": "120907000",
        "name": "Sohini Palit",
        "programName": "Information Science",
        "courseName": "Machine Learning",
        "year": "2019"
}
```

`https://twilight-wealth.glitch.me/api/student/5c92dfd163b05413edf2a874`
```json
{
        "studID": "120907000",
        "name": "Sohini Palit",
        "programName": "Information Science",
        "courseName": "Algorithm Design",
        "year": "2019"
}
```

`https://twilight-wealth.glitch.me/api/student/5c92e02a63b05413edf2a875`
```json
{
        "studID": "120902045",
        "name": "Meryl Streep",
        "programName": "Dramatic Arts",
        "courseName": "Acting",
        "year": "2000"
}
```

`https://twilight-wealth.glitch.me/api/student/5c92e09063b05413edf2a876`
```json
{
         "studID": "120907013",
        "name": "Satya Nadella",
        "programName": "Electronics Engineering",
        "courseName": "Antennas",
        "year": "2004"
}
```

Get courses by their ID

`https://twilight-wealth.glitch.me/api/course/5c8e5649599eea0d76934313`
```json
{
        "courseID": "1000",
        "courseName": "Machine Learning",
        "instructorName": "Hadelin"
}
```

`https://twilight-wealth.glitch.me/api/course/5c92e1de63b05413edf2a877`
```json
{
        "courseID": "1001",
        "courseName": "Power Electronic",
        "instructorName": "Suhas M"
}
```

`https://twilight-wealth.glitch.me/api/course/5c92e1ef63b05413edf2a878`
```json
{
        "courseID": "1002",
        "courseName": "Antennas",
        "instructorName": "Suhas k"
}
```

`https://twilight-wealth.glitch.me/api/course/5c92e21963b05413edf2a879`
```json
{
        "courseID": "1005",
        "courseName": "Product Development",
        "instructorName": "Ellen
}
```

`https://twilight-wealth.glitch.me/api/course/5c92e24063b05413edf2a87a`
```json
{
        "courseID": "1015",
        "courseName": "Acting",
        "instructorName": "Julia Roberts"
}
```

Get instructors by their ID

`https://twilight-wealth.glitch.me/api/course/5c91d7fb3d7d8519a058c181`
```json
{
        "instructorID": "100011",
        "instructorName": "Hadelin"
}
```

`https://twilight-wealth.glitch.me/api/course/5c92e29e63b05413edf2a87b`
```json
{
        "instructorID": "100055",
        "instructorName": "Julia Roberts"
}
```

`https://twilight-wealth.glitch.me/api/course/5c92e30c63b05413edf2a87c`
```json
{
        "instructorID": "100129",
        "instructorName": "Suhas M"
}
```

`https://twilight-wealth.glitch.me/api/course/5c92e31c63b05413edf2a87d`
```json
{
        "instructorID": "100449",
        "instructorName": "Ellen
}
```

`https://twilight-wealth.glitch.me/api/course/5c92e36c63b05413edf2a87f`
```json
{
        "instructorID": "100435",
        "instructorName": "Rebecca"
}
```

Get courses taken by a specific student

`https://twilight-wealth.glitch.me/api/student/5c92df9963b05413edf2a873/courses`
```json
{
   "Machine Learning"
}
```

`https://twilight-wealth.glitch.me/api/student/5c92e09063b05413edf2a876/courses`
```json
{
   "Antennas"
}
```

Made by [Glitch](https://glitch.com/)
-------------------

\ ゜o゜)ノ

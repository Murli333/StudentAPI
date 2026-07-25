const express = require("express");
const router = express.Router();

const {
     welcome,
    about,
    studentInfo,
    info,
    getStudents,
    getStudentById,
    createStudent,
    deleteStudent,
    updateStudent
} = require("../controllers/student.controller");

router.get("/",welcome);

router.get("/about",about);

router.get("/student",studentInfo);

router.get("/info",info);

router.get("/students",getStudents);

router.get("/students/:i",getStudentById);

router.post("/students",createStudent);

router.post("/students/:id",deleteStudent);

router.put("/students/:id",updateStudent);

router.delete("/students/:id",deleteStudent);

module.exports = router;


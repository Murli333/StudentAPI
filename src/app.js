const express = require("express");
const app = express();
app.use(express.json());

const studentRoutes = require("./routes/student.routes")

app.use(studentRoutes);

module.exports = app;
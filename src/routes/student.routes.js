const {get} = require("../controllers/student.controller");
const express = require("express");
const router = express.Router();
router.get("/students",get);

module.exports = {router};
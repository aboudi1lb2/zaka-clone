const express = require('express')
const router = express.Router()
const verifyAdmin = require("../middleware/verifyAdmin")
const {
    getCourses,
    addCourse,
} = require('../controller/courses')



router.get('/', getCourses)
router.post('/add', verifyAdmin, addCourse)

module.exports = router
const express = require('express')
const router = express.Router()
const verifyAdmin = require("../middleware/verifyAdmin")

const {
    addLesson,
    removeLesson,
} = require('../controller/lessons')

router.post('/courses/lessons/add',verifyAdmin,addLesson)
router.delete('/courses/lessons',verifyAdmin,removeLesson)

module.exports = router

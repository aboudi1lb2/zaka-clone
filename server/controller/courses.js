const Courses = require('../models/courses')

const getCourses = async (req, res) => {
    try {
        const courses = await Courses.find({})
        res.json({ status: 'ok', courses: courses })
    } catch (error) {
        return res.json({ status: 'error', error: error.message })
    }
}

const addCourse = async (req, res) => {
    try {
        const {
            title,
            image,
            desc,
        } = req.body.data
        
        const course = new Courses({
            title,
            image,
            desc,
        })

        const savedCourse = await course.save()
        return res.json({ status: "ok", course: savedCourse })
    } catch (error) {
        return res.json({ status: "error", error: error.message })
    }
}

module.exports = {
    getCourses,
    addCourse,
}
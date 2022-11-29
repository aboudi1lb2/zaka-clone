const Courses = require('../models/courses')

const addLesson = async (req, res) => {
    try {
        const { courseId, lesson } = req.body.data
        Courses.findByIdAndUpdate(courseId, {
            $push: { lessons: lesson }
        }, (error, updatedCourse) => {

            if (error) return res.json({ status: "error", error: error.message })

            return res.json({ status: "ok", courseId })
        })
    } catch (error) {
        return res.json({ status: "error", error: error.message })
    }
}

const removeLesson = async (req, res) => {
    try {
        const { courseId, lesson } = req.body.data
        Courses.findByIdAndUpdate(courseId, {
            $pull: { lessons: lesson }
        },
            (error, _) => {

                if (error) return res.json({ status: "error", error: error.message })

                return res.json({ status: "ok", courseId })
            })

    } catch (error) {
        return res.json({ status: "error", error: error.message })
    }
}

module.exports = {
    addLesson,
    removeLesson,
}
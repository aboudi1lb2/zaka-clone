const mongoose = require("mongoose")
const schema = mongoose.Schema

const coursesSchema = new schema({
    title: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    lessons: {
        type: Array,
    },
    enrolled: {
        type: Array,
    }
}, { timestamps: true })

module.exports = mongoose.model('Courses', coursesSchema)


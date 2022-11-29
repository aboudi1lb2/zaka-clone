const express = require('express')
const app = express()
const path = require('path')

//mongodb
const mongoose = require('mongoose')
const mongooseUrl = require('./config/mongoose')

//port
const port = process.env.PORT || 8085

//connect
mongoose.connect(mongooseUrl)
    .then(res => {
        console.log(`Connect mongoose suuccessfully`)
    }).catch(err => {
        console.log('Connection faild mongoose: ' + err)
    })

app.listen(port, () => {
    console.log('Connect port success')
})

//cors
const cors = require('cors')

//body parser
const bodyParser = require('body-parser')

//cookie parser
const cookieParser = require("cookie-parser")

//middlware
app.use(cors())
app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())

//urls
const coursesRoutes = require("./routes/courses")
const adminRoutes = require("./routes/admin")
const lessonsRoutes = require("./routes/lessons")

app.use('/api/courses', coursesRoutes)
app.use('/api/admin', adminRoutes)
app.use('/api', lessonsRoutes)

// client routes
app.use(express.static(path.join(__dirname, "../client/build")))

const buildPath = path.normalize(path.join(__dirname, "../client/build"))

app.use(express.static(buildPath))

app.get("*", (req, res) => {
    res.sendFile(path.join(buildPath, 'index.html'))
})
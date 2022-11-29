const express = require("express")
const router = express.Router()

const adminLogin = require("../controller/admin")
const verifyAdmin = require("../middleware/verifyAdmin")

router.post('/', verifyAdmin, (_, res) => {
    res.json({ status: "ok" })
})

router.post('/login', adminLogin)

module.exports = router
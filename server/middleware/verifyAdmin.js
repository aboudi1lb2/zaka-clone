const jwt = require("jsonwebtoken")
const JWT_SECRET_KEY = require('../config/jwt')

const verifyAdmin = async (req, res, next) => {
    try {
        const adminToken = req.cookies.adminToken
        if (adminToken) {
            jwt.verify(adminToken, JWT_SECRET_KEY,
                (error, user) => {
                    if (error) return res.json({ status: "error", error: error.message })
                    next()
                })
        } else return res.json({ status: "auth" })
    } catch (error) {
        return res.json({ status: "error", error: error.message })
    }
}

module.exports = verifyAdmin
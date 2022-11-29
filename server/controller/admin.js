const jwt = require("jsonwebtoken")
const JWT_SECRET_KEY = require('../config/jwt')

const adminLogin = async (req, res) => {
    try {
        const { username, password } = req.body.data
        
        if (!username || !password) return res.json({ status: "error", error: "Username and password are required" })

        if (username === "aboudimoustafa70261514" && password === "@boudi123+=") {
            const adminToken = jwt.sign('admin', JWT_SECRET_KEY)
            return res.cookie('adminToken', adminToken, {
                httpOnly: true,
            }).json({ status: "ok" })
        }
        return res.json({ status: "error", error: "Username or password are incorrect" })
    } catch (error) {
        return res.json({ status: "error", error: error.message })
    }
}

module.exports = adminLogin
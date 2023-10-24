import jwt from 'jsonwebtoken'
import User from '../models/UserSchema.js'
import Doctor from '../models/DoctorSchema.js'

export const authenticate = async (req, res, next) => {

    // Get token from headers
    const authToken = req.headers.authorization

    // Check token is exists
    if (!authToken || !authToken.startsWith('Bearer')) {
        return res
            .status(401).json({
                success: false, message: "No token, authorization denied"
            })
    }
    try {
        // console.log(authToken)
        const token = authToken.split(" ")[1]

        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)

        req.userId = decoded.userId
        req.role = decoded.role

        next() // Most call the next function
    } catch (err) {
        if (err.name === 'TokenExpiredError') {
            return res.status(401).json({ message: 'Token is expired' })
        }

        return res.status(401).json({ success: false, message: 'Invalid token' })
    }
}

// export const restrict = async (req, res, next) => { }
import jwt from 'jsonwebtoken'
import Doctor from '../models/DoctorSchema.js'
import User from '../models/UserSchema.js'

export const authenticate = async (req, res, next) => {

    // Get token from headers
    const authToken = req.headers.authenticate

    // Check token is exists
    if (!authToken || !authToken.startsWith('Bearer')) {
        return res
            .status(401).json({
                success: false, message: "No token, authorization denied"
            })
    }
    try {
        console.log(authToken)
        next()
    } catch (err) {

    }
}
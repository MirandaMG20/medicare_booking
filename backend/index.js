import express from "express";
import cookieParser from "cookie-parser";
import cors from 'cors'
import mongoose from "mongoose";
import dotenv from 'dotenv'
import authRoute from './Routes/auth.js'

dotenv.config()

const app = express()
const port = process.env.PORT || 8000

app.listen(port, () => {
    connectDB()
    console.log(`Server is running on port localhost:${port}`)
})

const corsOptions = {
    origin: true
}

app.get('/', (req, res) => {
    res.send('API is working!')
})

//DATABASE CONNECTIONS
mongoose.set('strictQuery', false)
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        console.log('MongoDB is connected')

    } catch (err) {
        console.log('MongoDB connection failed')
    }
}

// MIDDLEWARE
app.use(express.json())
app.use(cookieParser())
app.use(cors(corsOptions))
app.use('/api/v1/auth', authRoute) // domain/api/v1/auth/register
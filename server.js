import express from 'express';
import colors from 'colors';
import dotenv from "dotenv";
import morgan from 'morgan';
import connectDB from './configs/db.js';
import authRoutes from './routes/authRoute.js'

dotenv.config()

const app = express()

// database config
connectDB()

// middleware
app.use(express.json())
app.use(morgan('dev'))

// routes
app.use('/api/v1/auth', authRoutes)


app.get('/', (req, res) => {
    res.send({ message: 'welcome to the server' })
})

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`.bgCyan.white)
})
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { connectDB } from './config/dbConnection'
import productRouter from './routers/productRouter'
import seedRouter from './routers/seedRouter'

dotenv.config()
connectDB()
const PORT = process.env.PORT || 4000

const app = express()
app.use(express.json({ limit: '50mb' }))
app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:5173'], //all request from this server will be accepted
  })
)
app.use('/api/seed', seedRouter)
app.use('/api/products', productRouter)

app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`)
})

import express, { Request, Response } from 'express'
import { sampleProducts } from './data'
import cors from 'cors'

const app = express()

app
  .use(
    cors({
      credentials: true,
      origin: ['http://localhost:5173'], //all request from this server will be accepted
    })
  )
  .get('/api/products', (req: Request, res: Response) => {
    res.json(sampleProducts)
  })
const PORT = 4000
app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`)
})

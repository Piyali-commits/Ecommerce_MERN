import { Request, Response, Router } from 'express'
import { sampleProducts } from '../data'
import Product from '../model/productModel'

const seedRouter: Router = Router()
seedRouter.get('/', async (req: Request, res: Response) => {
  try {
    await Product.deleteMany({})
    const createdProducts = await Product.insertMany(sampleProducts)
    res.json({ createdProducts })
  } catch (err) {
    throw err
  }
})
export default seedRouter

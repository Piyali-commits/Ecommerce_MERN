import { IProduct } from '../types/Product'
import Product from '../model/productModel'
import { Request, Response } from 'express'

export const fetchProducts = async (req: Request, res: Response) => {
  try {
    const products: IProduct[] = await Product.find()
    res.status(200).json(products)
  } catch (error) {
    throw error
  }
}
export const fetchSelectedProduct = async (req: Request, res: Response) => {
  try {
    const selectedProduct = await Product.findOne({ slug: req.params.slug })
    res.status(200).json(selectedProduct)
  } catch (err) {
    throw err
  }
}

import { Router } from 'express'

import { fetchProducts, fetchSelectedProduct } from '../controller/productController'

const productRouter: Router = Router()
productRouter.get('/', fetchProducts)
productRouter.get('/product/:slug', fetchSelectedProduct)

export default productRouter

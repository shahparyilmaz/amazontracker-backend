import express from 'express'
const router = express.Router()
import { getProductData } from '../data/product.js'
import { saveProduct } from '../controllers/saveproduct.js'
import { Product } from '../models/saveProduct.js'

router.post('/:productid',saveProduct)

export default router;
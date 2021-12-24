import express from 'express'
const router = express.Router()
import { getSavedProducts,deleteAll } from '../controllers/saveproduct.js'
import { Product } from '../models/saveProduct.js'

router.get('/',getSavedProducts)
router.get('/deleteall',deleteAll)

export default router;
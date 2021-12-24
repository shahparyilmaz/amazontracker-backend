import express from 'express'
const router = express.Router()
import { getProductPrices } from '../controllers/productprices.js'

router.route('/:productid').get((req,res)=>{
    const productid = req.params.productid
    getProductPrices(productid).then(response=>{
        res.send(response)
        }
    )
})

export default router;
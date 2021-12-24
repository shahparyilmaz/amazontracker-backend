import express from 'express'
const router = express.Router()
import { getProductData } from '../controllers/productdata.js'

router.route('/:productid').get((req,res)=>{
    const productid = req.params.productid
    getProductData(productid).then(response=>{
        res.send(response)
        }
    )
})

export default router;
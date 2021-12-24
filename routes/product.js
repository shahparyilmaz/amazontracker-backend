import express from 'express'
const router = express.Router()
import { getProductData } from '../data/product.js'

router.route('/:productid/:producttitle/:productprice').get((req,res)=>{
    const productid = req.params.productid
    const producttitle = req.params.producttitle
    const productprice = req.params.productprice
    // const productimage = req.params.productimage
    getProductData([`https://www.amazon.in/dp/${productid}`,productid,producttitle,productprice]).then(response=>{
        res.send(response)
        }
    )
})

export default router;
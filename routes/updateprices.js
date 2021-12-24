import express from 'express'
const router = express.Router()
import { updateAllPrices } from '../controllers/updateallprices.js'
import { Product } from '../models/saveProduct.js'

// router.get('/',updateAllPrices)
router.route('/').get((req,res)=>{
    // const productid = req.params.productid
    // setInterval(async()=>{
    //     try{
    //         updateAllPrices().then(response=>{
    //             res.send(response)
    //             }
    //         )
    //     }
    //     catch(error){
    //         console.log(error)
    //     }
    // },10000)
    updateAllPrices().then(response=>{
        res.send(response)
        }
    )

})
// router.route('/').get((req,res)=>{
//     res.send('update')
// })

export default router;
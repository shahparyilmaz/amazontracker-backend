import express from 'express'
const router = express.Router()
import { updateAllProducts } from '../controllers/showallproducts.js'

router.route('/').get((req,res)=>{
    updateAllProducts().then(response=>{
        res.send(response)
        }
    )
})
export default router;
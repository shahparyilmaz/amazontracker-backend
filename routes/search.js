import express from 'express'
const router = express.Router()
import { getSearchData } from '../data/search.js'

router.route('/:product').get((req,res)=>{
    const product = req.params.product
    getSearchData(`https://www.amazon.in/s?k=${product}`).then(response=>{
        res.send(response)
        }
    )
})

export default router;
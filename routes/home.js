import express from 'express'
const router = express.Router()
import { getSearchData } from '../data/search.js'

router.route('/').get((req,res)=>{
    res.send('home')
})

export default router;
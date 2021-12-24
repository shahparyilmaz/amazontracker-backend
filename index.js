import express from 'express'
// const express = require('espress')
import cors from 'cors'
// const cors = require('cors');
import dotenv from 'dotenv'
// const dotenv = require('cors')
dotenv.config()
// require('dotenv').config();
import mongoose from 'mongoose'
// const mongoose = require('mongoose')

const app = express();
import bodyParser from 'body-parser'
app.use(bodyParser.json({limit:"20mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"20mb",extended:true}))
const port = process.env.PORT || 4000
app.use(cors())
app.use(express.json())
const connection_url = process.env.ATLAS_URL
mongoose.connect(connection_url,{useNewUrlParser:true,useUnifiedTopology:true})
const connection=mongoose.connection
connection.once('open',()=>{
    console.log("MongoDB database connection")
})

import axios from 'axios'
import cheerio from 'cheerio'

import homeRoute from './routes/home.js'
import searchRoute from './routes/search.js'
import productRoute from './routes/product.js'
import saveProductRoute from './routes/saveproduct.js'
import savedProductsRoute from './routes/savedproducts.js'
import productPricesRoute from './routes/productprices.js'
import updateAllPricesRoute from './routes/updateprices.js'
import productDataRoute from './routes/productdata.js'

app.use('/',homeRoute);
app.use('/search',searchRoute)
app.use('/product',productRoute)
app.use('/saveproduct',saveProductRoute)
app.use('/savedproducts',savedProductsRoute)
app.use('/productprices',productPricesRoute)
app.use('/updateprices',updateAllPricesRoute)
app.use('/productdata',productDataRoute)

import { Product } from './models/saveProduct.js'
import { getProductPrice } from './data/price.js'
import { updateAllPrices } from './controllers/updateallprices.js'

app.listen(port,()=>{
    setInterval(()=>{
        try{
            updateAllPrices()
        }
        catch{}
    },86400000)
    
    console.log(`Running on port: ${port}`)
})
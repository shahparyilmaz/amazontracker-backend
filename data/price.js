import axios from 'axios'
import cheerio from 'cheerio'


const fetchProductPrice = async (link)=>{
    let productlink= await link
    let price = await axios.get(productlink).then(urlResponse=>{
        // console.log(productlink)
        let displayprice=''
        const $ = cheerio.load(urlResponse.data)
        displayprice = $('div#price').find('tr#priceblock_ourprice_row').find('span#priceblock_ourprice').text()
        if(displayprice==""){
            displayprice = $('div#price').find('tr#priceblock_dealprice_row').find('span#priceblock_dealprice').text()
        }
        // console.log(displayprice)
        return displayprice
    }).then((displayprice)=>{
        let price=displayprice
        while(price.search(',')!=-1){
            price = price.replace(',','')
        }
        price = parseInt(price.slice(1,price.length))
        return price;
    }).catch(error=>{
        console.log('error')
        return
    })
    return price;
}


export const getProductPrice = async (link)=>{
    const productlink = link
    const productData = await fetchProductPrice(productlink)
    return productData
}
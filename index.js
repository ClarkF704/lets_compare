const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const path = require('path');
const request = require('request'); //If this dosnt work. Replace with Axios
const cheerio = require('cheerio');
const axios = require('axios');
const mongojs = require('mongojs');
const fs = require('fs');
const dataJSON = fs.readFileSync('./client/src/Data/data.json');
const dataP = JSON.parse(dataJSON);
const app = express();



dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));




// Scraper route post goes here
app.post('/api/form', (req ,res)=>{
    console.log(req.body);
    const item = (req.body.name);
    // BING
    request('https://www.bing.com/shop?q='+item+'&FORM=SHOPTB',(error, response, html) =>{
        if(!error && response.statusCode == 200) {
            const $ = cheerio.load(html);
            const price1 = $('li.br-item:nth-of-type(1) > .br-ahdecorations.br-small.br-card > .br-pdInfo > .promoted.br-standardPrice.pd-price');
            const price2 = $('li.br-item:nth-of-type(2) > .br-ahdecorations.br-small.br-card > .br-pdInfo > .promoted.br-standardPrice.pd-price');
            const price3 = $('li.br-item:nth-of-type(3) > .br-ahdecorations.br-small.br-card > .br-pdInfo > .promoted.br-standardPrice.pd-price');
            const price4 = $('li.br-item:nth-of-type(4) > .br-ahdecorations.br-small.br-card > .br-pdInfo > .promoted.br-standardPrice.pd-price');
            const price5 = $('li.br-item:nth-of-type(5) > .br-ahdecorations.br-small.br-card > .br-pdInfo > .promoted.br-standardPrice.pd-price');
            
            const name1 = $('li.br-item:nth-of-type(1) > .br-ahdecorations.br-small.br-card > .br-pdInfo > .br-voidlink > .br-standardText.br-pdItemName');
            const name2 = $('li.br-item:nth-of-type(2) > .br-ahdecorations.br-small.br-card > .br-pdInfo > .br-voidlink > .br-standardText.br-pdItemName');
            const name3 = $('li.br-item:nth-of-type(3) > .br-ahdecorations.br-small.br-card > .br-pdInfo > .br-voidlink > .br-standardText.br-pdItemName');
            const name4 = $('li.br-item:nth-of-type(4) > .br-ahdecorations.br-small.br-card > .br-pdInfo > .br-voidlink > .br-standardText.br-pdItemName');
            const name5 = $('li.br-item:nth-of-type(5) > .br-ahdecorations.br-small.br-card > .br-pdInfo > .br-voidlink > .br-standardText.br-pdItemName');
            
            console.log(name1.text());
            console.log(price1.text());
            console.log(name2.text());
            console.log(price2.text());
            console.log(name3.text());
            console.log(price3.text());
            console.log(name4.text());
            console.log(price4.text());
            console.log(name5.text());
            console.log(price5.text());
            
            const txt = [{
                "Item1": name1.text(),
                "Price1": price1.text(),
                "Item2": name2.text(),
                "Price2": price2.text(),
                "Item3": name3.text(),
                "Price3": price3.text(),
                "Item4": name4.text(),
                "Price4": price4.text(),
                "Item5": name5.text(),
                "Price5": price5.text()
            }];
            console.log(dataP);
            const words = JSON.stringify(txt, null, 2)
            fs.writeFile('./client/src/Data/data.json', words, finished);
            function finished(err){
                console.log('added!!');
            }  
        }
    })

    // Google
    request("https://www.google.com/search?tbm=shop&hl=en&source=hp&biw=&bih=&q="+item+"&oq=shoes&gs_l=products-cc.3..0l10.2696.3366.0.3559.5.5.0.0.0.0.92.425.5.5.0....0...1ac.1.34.products-cc..0.5.424.dV7A8gruaMc",(error, response, html) =>{
        if(!error && response.statusCode == 200) {
            const $ = cheerio.load(html);
            const price1 = $('div.sh-sr__shop-result-group:nth-of-type(1) > .sh-pr__product-results > div.sh-dlr__list-result:nth-of-type(1) > .sh-dlr__content > .ZGFjDb > div > div.TxCHDf.na4ICd:nth-of-type(2) > .mQ35Be > div > .O8U6h');

            const name1 = $('.eIuuYe > [href^="/shopping/product/6326362260915638296"]');
 
            
            console.log(name1.text());
            console.log(price1.text());

            
            const txt = [{
                "Item1": name1.text(),
                "Price1": price1.text(),
            }];
            
            const words = JSON.stringify(txt, null, 2)
            fs.writeFile('./client/src/Data/data2.json', words, finished);
            function finished(err){
                console.log('added!!');
        } 
        }
    })

  
  res.send("scrape complete");
});


const PORT = process.env.PORT || 3004

// Production code
if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));

    app.get('*', (req,res)=>{
        res.sendFile(path.reolve(__dirname, 'client', 'build', 'index.html'))
    });
}
//
app.listen(PORT, ()=>{
    console.log(`Server is listening on port ${PORT}`)
});
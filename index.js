const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const path = require('path');
const request = require('request'); //If this dosnt work. Replace with Axios
const cheerio = require('cheerio');
const axios = require('axios');


const app = express();

dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Scraper route post goes here
app.post('/api/form', (req ,res)=>{
    console.log(req.body);
    const item = (req.body.name);
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
            
        }
    })

});






//


const PORT = process.env.PORT || 3001

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
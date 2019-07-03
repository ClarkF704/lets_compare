const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const path = require('path');
const request = require('request'); //If this dosnt work. Replace with Axios
const cheerio = require('cheerio');
const axios = require('axios');
const mongojs = require('mongojs');
const fs = require('fs');
const cors = require('cors');
const dataJSON = fs.readFileSync('./client/src/Data/data.json');
const dataP = JSON.parse(dataJSON);
const app = express();



dotenv.config();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


console.log('hey')

// Scraper route post goes here
app.get('/post', (req ,res)=>{
    console.log('hey')
    console.log(req.body);
    const item = (req.body.name);
    console.log(req.body.name)
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
            const words = JSON.stringify(txt, null, 2)
            fs.writeFile('./client/src/Data/data.json', words, finished);
            function finished(err){
                console.log('added!!');
            }  
        }
    })

  

// craigslist
request('https://charlotte.craigslist.org/search/sss?query='+item+'&sort=rel',(error, response, html) =>{
    if(!error && response.statusCode == 200) {
        const $ = cheerio.load(html);
        const price1 = $('li.result-row:nth-of-type(1) > .result-info > .result-meta > .result-price');
        const price2 = $('li.result-row:nth-of-type(2) > .result-info > .result-meta > .result-price');
        const price3 = $('li.result-row:nth-of-type(3) > .result-info > .result-meta > .result-price');
        const price4 = $('li.result-row:nth-of-type(4) > .result-info > .result-meta > .result-price');
        const price5 = $('li.result-row:nth-of-type(5) > .result-info > .result-meta > .result-price');
        
        const name1 = $('li.result-row:nth-of-type(1) > .result-info > .hdrlnk.result-title');
        const name2 = $('li.result-row:nth-of-type(2) > .result-info > .hdrlnk.result-title');
        const name3 = $('li.result-row:nth-of-type(3) > .result-info > .hdrlnk.result-title');
        const name4 = $('li.result-row:nth-of-type(4) > .result-info > .hdrlnk.result-title');
        const name5 = $('li.result-row:nth-of-type(5) > .result-info > .hdrlnk.result-title');
        
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
        
        const txt2 = [{
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
        
        const words2 = JSON.stringify(txt2, null, 2)
        fs.writeFile('./client/src/Data/data2.json', words2, finished2);
        function finished2(err){
            console.log('added!!');
        }  
    }
})

res.send("scrape complete for bing and craigslist");

});


const PORT = process.env.PORT || 3008

// Production code
if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));

    app.get('*', (req,res)=>{
        res.sendFile(path.reolve(__dirname, 'client', 'build', 'index.html'))
    });
}
//
app.listen(PORT, ()=>{
    console.log(`Backend Server is listening on port ${PORT}`)
});
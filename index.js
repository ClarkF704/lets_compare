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
    const item = (req.body);
    request("https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2380057.m570.l1313.TR11.TRC2.A0.H0.Xsoccerball.TRS1&_nkw="+item+"&_sacat=0",(error, response, html) =>{
        if(!error && response.statusCode == 200) {
            const $ = cheerio.load(html);
            const one = $('.srp-river-results-listing1 > .clearfix.s-item__wrapper > .clearfix.s-item__info > .clearfix.s-item__details > div.s-item__detail--primary.s-item__detail:nth-of-type(1) > .s-item__price');
            console.log(one.html());
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
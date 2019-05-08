const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const path = require('path');
const request = require('request'); //If this dosnt work. Replace with Axios
const cheerio = require('cheerio');


const app = express();

dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Scraper route post goes here
app.post('/api/form', (req,res)=>{
    const item = req.body.name;
request(`https://www.walmart.com/search/?query=${req.body.name}`, (error, response, html) =>{
    if(!error && response.statusCode == 200){
        console.log(html);
    }
});





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
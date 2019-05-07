const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const path = require('path');

const app = express();

dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Scraper route post goes here


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
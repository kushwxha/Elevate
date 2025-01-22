const express = require('express');
const app = express();

require('dotenv').config();
const port = process.env.PORT;
console.log(port);

const dbconnect = require('./dbconfig/dbconfig');
dbconnect();

app.get('/',async(req,res) =>{
    res.send("<h1>Server is running<h1>");
})

app.listen(port, async(req,res) =>{
    console.log(`Server is running on port http://localhost:${port}`);
})
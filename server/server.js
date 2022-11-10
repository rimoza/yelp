//configure .env file
require('dotenv').config();
// import express
const express = require('express');
//create instant of express app
const app = express();

//first express route
app.get('/getRestaurants', (req,res) =>{
    res.json({
        status: "success",
        name: "Carro edeg"
    })
})


//listening port 
const port = process.env.PORT || 3001;
app.listen(port, () =>{
    console.log(`server is up and listening on port ${port}`)
});
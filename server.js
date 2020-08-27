'use strict';

// make a variable called express to use the express library
const express = require('express');

// initialize the express
// server has lot of properties and methods
const server = express(); 

// declare a PORT to connect your website with the server
const PORT = process.env.PORT ||1997;

// to access files and folders inside public
server.use(express.static('./public'));


// http://localhost:3000/location?city=amman
// http://localhost:3000/data
server.get('/data',(request,response) =>{
    response.send('You are doing great!!');
})

// http://localhost:3000/family
server.get('/family',(req,res)=>{
    let familyArr = [
        {name:'Atallah'},
        {name: 'Mesina'},
        {name:'Razan'}
    ];
    res.json(familyArr);
})



server.listen (PORT,()=>{
    console.log(`listening to PORT ${PORT}`);
})
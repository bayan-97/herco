'use strict';


const express = require('express');


const server = express(); 


const PORT = process.env.PORT ||1997;


server.use(express.static('./public'));



server.get('/me',(request,response) =>{
    response.send('Hi my name is bayan');
})


server.get('/family',(req,res)=>{
    let familyArr = [
        {name:'Ahmad'},
        {name: 'Omer'},
        {name:'Afnan'}
    ];
    res.json(familyArr);
    
    
   
})



server.listen (PORT,()=>{
    console.log(`listening to PORT ${PORT}`);
})
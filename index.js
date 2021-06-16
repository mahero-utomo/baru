const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('belajar lagi');
})

app.listen( process.env.PORT || 3000, function (){
    console.log("running on port 3000");
})
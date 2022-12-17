const express = require('express');
const app = express();
const PORT = 9000;


app.use('/',(req,res)=>{
    res.send("helo kaushik");
})

app.listen(PORT,()=>{
    console.log(`listening to PORT number ${PORT}`);
})
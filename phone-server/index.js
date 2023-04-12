const express = require('express')
var cors = require('cors')
const phones = require('./phones.json');
const app = express()
const port = 3000;
app.use(cors())
app.get ('/',(req,res)=>{
    res.send('inforrr')
})
app.get('/phones', (req,res)=>{
    res.send(phones)
})
app.get('/phones/:id', (req,res)=>{
    const id = parseInt(req.params.id )
    console.log('i need id for : ',id);

    const phone = phones.find( phone => phone.id === id) || {}
    res.send(phone)
})


app.listen(port,()=>{
    console.log(`port is ${port}`);
})
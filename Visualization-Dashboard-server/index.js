const {findAll}  = require('./database/db')
const express = require('express')
const app = express();
const cors = require('cors')

app.use(cors())

app.get('/',(req,res)=>{
    res.send("welcome")
})

app.get('/api/data',(req,res)=>{
    // res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    findAll()
    .then((result)=>{  res.send(result) })
    .catch(()=>{res.send({"message":"no data found"})})
    
})



app.listen(4000,()=>{
    console.log('server running');
})

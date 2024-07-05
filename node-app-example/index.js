const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send(`
    <h1>Hello World</h1> 
    <p>Docker container NodeJS</p>   
    `)
})

app.listen(3000,()=>{
    console.log('Server listening in 3000')
})
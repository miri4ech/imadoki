const express = require('express')
const app = express()
const portNo = 3000

//if access 
app.get('/',(req,res,next) => {
  res.send('Hello, World')
})

app.get('/index',(req,res,next) => {
  res.send('Hello, Miri')
})

//up server
app.listen(portNo, () =>{
  console.log('its up',`http://localhost:${portNo}`)
})
const express = require('express')
const app = express()

app.listen(3000, () =>{
  console.log('its up',`http://localhost:3000`)
})

//return static file
app.use('/',express.static('./html'))
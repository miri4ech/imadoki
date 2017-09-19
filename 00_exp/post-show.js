const express = require('express')
const app = express()
const portNo = 3000

//activated body parser -> npm install --save body-parser
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))

//up server
app.listen(portNo, () => {
  console.log('its up', `http://localhost:${portNo}`)
})

app.get('/', (req, res) => {
  res.send(
    '<form method="POST">' +
    '<textarea name="memo">TEST</textarea>' +
    '<br /><input type="submit" value="SEND">' +
    '</form>'
  )
})

app.post('/', (req, res) => {
  const s = JSON.stringify(req.body)
  res.send('Receiving POST data' + s)
})

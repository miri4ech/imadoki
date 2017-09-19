const express = require('express')
const app = express()
const portNo = 3000

//if access 
app.get('/', (req, res) => {
  if(!req.query.q){
    res.send(
      '<p><a href="?q=6">6面体のサイコロ</a><br />' +
      '<a href="?q=12">12面体のサイコロ</a></p>'
    )
  } else {
    const q = parseInt(req.query.q, 10)
    res.send(
      '今回の値は....' + dice(q)
    )
  }

})

// access to dice
// app.get('/dice/6', (req, res) => {
//   res.send('今回の値は....' + dice(6))
// })
// app.get('/dice/12', (req, res) => {
//   res.send('今回の値は....' + dice(12))
// })

// app.get('/dice/:num', (req, res) => {
//   res.send('今回の値は....' + dice(req.params.num))
// })

//dice func
function dice(n) {
  return Math.floor(Math.random() * n) +1
}

//up server
app.listen(portNo, () => {
  console.log('its up', `http://localhost:${portNo}`)
})
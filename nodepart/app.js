const express = require('express')

var app = express()

app.get('/', function (req, res) {
  res.send('This is homepage')
})

app.get('/contact', function (req, res) {
  res.send('This is contact page')
})

app.listen(3000)

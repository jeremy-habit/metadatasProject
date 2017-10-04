const express = require('express')
const twig = require('twig')

const app = express()
app.get('/', function (req, res) {
  res.setHeader('Content-Type', 'text/html');
  res.render('app.twig');
})

app.post('/upload', (req, res) => {
  res.end('ok')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

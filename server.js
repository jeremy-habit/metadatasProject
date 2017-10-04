const express = require('express')
const twig = require('twig')
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

const app = express()
app.get('/', function (req, res) {
  res.setHeader('Content-Type', 'text/html');
  res.render('app.twig');
})


app.post('/upload', upload.single('file'), function (req, res, next) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
  console.log(req.file)
  res.end('ok')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

const express = require('express')
const twig = require('twig')
const multer = require('multer')
const upload = multer({dest: 'uploads/'})
const util = require('util')
const exec = require('child_process').exec

const app = express()

app.get('/', function (req, res) {
  res.setHeader('Content-Type', 'text/html')
  res.render('app.html.twig')
})

app.post('/upload', upload.single('file'), function (req, res, next) {
  let fields = []
  let cmd = exec('exiftool -json ' + req.file.path, function (error, stdout, stderr) {
    test(stdout)
  })
  let test = (stdout) => {
    let metadatas = JSON.parse(stdout)[0]
    console.log(metadatas)
    fields['fileName'] = metadatas.FileName
    fields['description'] = metadatas.Title
    fields['copyright'] = metadatas.Copyright
    fields['path'] = req.file.path
    console.log(fields)
    res.render('form.html.twig', {fields: fields})
  }
})

app.post('/display', function (req, res, next) {/*
  let cmd = exec('exiftool -json ' + req.file.path, function (error, stdout, stderr) {
    test(stdout)
  })
  let test = (stdout) => {
    let metadatas = JSON.parse(stdout)[0]
    console.log(metadatas)
    fields['fileName'] = metadatas.FileName
    fields['description'] = metadatas.Title
    fields['copyright'] = metadatas.Copyright
    fields['path'] = req.file.path
    console.log(fields)
    res.render('form.html.twig', {fields: fields})
  }*/
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

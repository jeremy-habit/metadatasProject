const express = require('express')
const formidable = require('formidable')

const app = express()
app.get('/upload', function (req, res) {
  let form = new formidable.IncomingForm();

  form.parse(req, function(err, fields, files) {
    res.writeHead(200, {'content-type': 'text/plain'});
    res.write('received upload:\n\n');
    res.end(util.inspect({fields: fields, files: files}));
  });
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

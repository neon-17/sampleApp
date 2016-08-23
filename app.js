var express = require('express');
var app = express();
var port = process.env.PORTVAL || 3000;
app.get('/', function (req, res) {
  res.send('My first Application!');
});

app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});

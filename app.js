var express = require('express');
var app = express();
var port = process.env.PORTVAL || 3000;
var AWS = require('aws-sdk');
var credentials = new AWS.SharedIniFileCredentials({
        profile: 'eb-cli'
    });
app.get('/', function (req, res) {
  res.send('My first Application!');
});

app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});
console.log(credentials);

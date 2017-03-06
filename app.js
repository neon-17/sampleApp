var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var logspath = '/var/log/nodejs/logs-winston.log';
var winston = require('winston');
var logger = new winston.Logger({
  level: 'info',
  transports: [
    new (winston.transports.Console)(),
    new (winston.transports.File)({ filename: logspath })
  ]
});
app.get('/', function (req, res) {
    logger.info('Request recieved');
  res.send('My first Demo Application!');
});

app.listen(port, function () {
  logger.info('Example app listening on port '+ port+'!');
});

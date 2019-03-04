var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.end('hello hutul');
});

app.get('/:id', function(req, res) {
    res.end('hello hutul with id: ' + req.params.id);
});

module.exports = app;
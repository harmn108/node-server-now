var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.end('hello world');
});

app.get('/user/:id', function(req, res) {
  res.end('hello user with id: ' + req.params.id);
});

app.get('/:id', function(req, res) {
    res.end('hello world with id: ' + req.params.id);
});

app.get('/driver/:id', function(req, res) {
  res.end('hello driver with test id: ' + req.params.id);
});

module.exports = app;
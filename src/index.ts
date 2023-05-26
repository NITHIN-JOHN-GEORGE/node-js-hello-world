import * as express from "express";

var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "Hello World!!" }');
});

app.get('/healthz', function (req, res) {
    res.send('{ "response": "OK !!" }');
});
app.get('/ready', function (req, res) {
    res.send('{ "response": " Ready !, It works!" }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;

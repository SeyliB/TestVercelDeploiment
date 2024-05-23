var express = require('express');
var app = express();

app.get('/', function(req, res){
   res.send("Hello world!");
   console.log("aaa")
});

app.listen(4000);
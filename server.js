var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname + '/public')); 

app.get('/', function(req, res){
    res.sendFile(path.join((__dirname  + '/public')));
});

app.listen(process.env.PORT || 5000);
console.log('5000 is the magic port');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.post('/urlencoded', function(req, res){
    console.log(req.body);
    res.send(req.body);
});
app.listen(3002);

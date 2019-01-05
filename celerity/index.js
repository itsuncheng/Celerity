var express = require('express');
var app = express();
var path = require('path');
app.use(express.static('public'));



app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/public/home.html'));
});

app.get('/projects', function(req, res){
   res.sendFile(path.join(__dirname + '/public/projects.html'));
});


//app.listen(3000)
app.listen(process.env.PORT || 5000)

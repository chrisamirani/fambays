const http = require('http')
const express = require('express');
    

var app = express()

// set up a route to redirect http to https
app.get('*',function(req,res){  
    res.redirect('https server url' + req.url)
})


app.listen(80);
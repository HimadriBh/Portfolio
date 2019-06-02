var express = require("express");
var app = express();

app.use(express.static('public'));

app.get("/", (req, res)=>{
    res.render("index");
});

app.listen(4340, function(){
    console.log("server is listening at port 4340");
});
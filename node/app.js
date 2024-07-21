const express = require('express');
const bodyParser = require("body-parser");
const app = express();
app.use (express.urlencoded({extended:true}));

app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.get("/about", function(req,res){
    res.send("Hello World");
});

app.get("/megha", function(req,res){
    res.send("hello from raguram to megharani");
});

app.post("/",function(req,res){
    var n1 = Number(req.body.num1);
    var n2 = Number(req.body.num2);
    var result = (n1+n2);
    console.log(result);
});

app.listen(5500,function(){
    console.log("server started");
})
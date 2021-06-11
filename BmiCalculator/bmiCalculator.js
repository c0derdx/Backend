const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/" , function (req , res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/" , function(req , res){
    var height = Number(req.body.height); 
    var weight = Number(req.body.weight);
    
    var result = weight/(height*height);

    res.send("Your BMI is " + result);
});

app.listen(3000 , function(){
    console.log("Server started on port 3000");
});
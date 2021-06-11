const express = require('express');

const app = express();

app.get("/" , function(req , res) {
    res.send("<h1>Hello world</h1>");
});

app.get("/contact" , function (req , res) {
    res.send("contact me at coderdx007@gmail.com")
});

app.get("/about" , function (req , res) {
    res.send("I am Nikhil Saini and I am Webdeveloper.")
});

app.listen(3000 , function () {
    console.log("server started on port 3000"); 
});
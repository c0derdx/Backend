const express = require('express');
const https = require('https'); //to fetch api
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/" , function (req , res) {
    const query = req.body.cityName;
    const apiKey = "d82b919953375fe39adc3b0eca7ba475";
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+ query +"&appid="+ apiKey +"&units=" + unit;
    
    https.get(url, function (response) {
        //to print/get/fetch response
        // console.log(response);

        //to get specific information
        console.log(response.statusCode);

        //to fetch data
        response.on("data" , function(data){
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const description = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imageUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
            // console.log(weatherData);
            console.log(temp);
            console.log(description);
            res.write("<p>The weather is currently " + description + "</p>");
            res.write("<h1>The temperature in "+ query +" is " + temp + " degrees Celcius.</h1>");
            res.write("<img src=" + imageUrl + ">");
            res.send();
        });
    
    });
});
    

app.listen(3000, function () {
    console.log("server is running on port 3000");
});
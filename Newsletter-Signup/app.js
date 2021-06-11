const express = require('express');
const https = require('https');
const request = require('request');
const bodyParser = require('body-parser');
const { static } = require('express');

const app = express();

app.use(static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function (req,res) {
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function (req,res) {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;

    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    };

    const jsonData = JSON.stringify(data);

    const url = "https://us1.api.mailchimp.com/3.0/lists/c9b8c8a973";

    const options = {
        method: "POST",
        auth: "fufuchikna:fde652e5df9ac497ead07c2a07d39f56-us1"
    }
    
    const request = https.request(url, options, function (response) {
        if(response.statusCode === 200){
            res.sendFile(__dirname + "/success.html");
        }
        else{
            res.sendFile(__dirname + "/failure.html");
        }
        response.on("data", function (data) {
            console.log(JSON.parse(data));
        });
    });

    request.write(jsonData);
    request.end();

});

app.post("/failure", function (req,res) {
    res.redirect("/");
});

app.listen(process.env.PORT || 3000, function () {
    console.log("Server is running on port 3000");
});

//api key
//fde652e5df9ac497ead07c2a07d39f56-us1

//List id
//c9b8c8a973
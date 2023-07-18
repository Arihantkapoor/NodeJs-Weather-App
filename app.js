const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
   res.sendFile(__dirname + "/index.html");
});

// const query = "Delhi";
// const unit = "metric";
// const apiKey = "37e74e4786bc64bfab0f98c0bf4a09ea#";
// const url = "https://api.openweathermap.org/data/2.5/weather?q="+ query + "&units="+ unit+"&appid=" + apiKey;
// https.get(url, function(response){
//     response.on("data",function(data){
//         const weatherData = JSON.parse(data);
//         const temp = weatherData.main.temp;
//         const weatherdescription = weatherData.weather[0].description;
//         const url = "https://openweathermap.org/img/wn/" + weatherData.weather[0].icon + "@2x.png";
//         res.write("<h1>The temperature is " + temp + " degree celsius </h1>");
//         res.write("<h3>The weather is " + weatherdescription + "</h3>");
//         res.write("<img src=" + url + ">");
//         res.send();
//     })
// })

app.post("/",function(req,res){

    const query = req.body.city;
    const unit = "metric";
    const apiKey = "37e74e4786bc64bfab0f98c0bf4a09ea#";
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+ query + "&units="+ unit+"&appid=" + apiKey;
    https.get(url, function(response){
        response.on("data",function(data){
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const weatherdescription = weatherData.weather[0].description;
            const url = "https://openweathermap.org/img/wn/" + weatherData.weather[0].icon + "@2x.png";
            res.write("<h1>The temperature is " + temp + " degree celsius </h1>");
            res.write("<h3>The weather is " + weatherdescription + "</h3>");
            res.write("<img src=" + url + ">");
            res.send();
        })
    })

});

app.listen(3000,function(){
    console.log("Server is running at port 3000");
})

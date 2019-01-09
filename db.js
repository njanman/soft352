var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/soft352", {useNewUrlParser: true}); //connecting to database

var Car = mongoose.model("Car", {_id:         Number,
                                name:         String,
                                price:        Number,
                                power:        Number,
                                displacement: Number,
                                engine:       String});

var Option = mongoose.model('Option', {_id:     Number,
                                      name:     String,
                                      category: String,
                                      price:    Number});

express = require('express');
var app = express();
app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/listoptions', function (req, res){
    Option.find(function(err, options){
        res.setHeader('Content-Type', 'application/json');
        res.send(options);
    });
});

app.get('/listcars', function (req, res){
    Car.find(function(err, cars){
        res.setHeader('Content-Type', 'application/json');
        res.send(cars);
    });
});

app.get('/index', function(req, res){
    res.sendfile('views/index.html'); //load the index.html page
});

app.get('/engine', function(req, res){
    res.sendfile('views/engine.html'); //load the engine.html page
});

app.get('/exterior', function(req, res){
    res.sendfile('views/exterior.html'); //load the exterior.html page
});

app.get('/interior', function(req, res){
    res.sendfile('views/interior.html'); //load the interior.html page
});

app.get('/equipment', function(req, res){
    res.sendfile('views/equipment.html'); //load the equipment.html page
});

app.get('/styling', function(req, res){
    res.sendfile('css/index.css'); //load the css file
});

app.get('/carousel', function(req, res){
    res.sendfile('css/carousel.css'); //load the bootstrap carousel css file
});

app.get('/js', function(req, res){
    res.sendfile('js/index.js'); //load the js file
});

app.get('/summary', function(req, res){
    res.sendfile('views/summary.html'); //load the summary.html page
});

//load index page image items
app.get('/img_a1SB', function(req, res){
    res.sendfile('img/a1SB.png'); 
});

app.get('/img_a3SB', function(req, res){
    res.sendfile('img/a3SB.png'); 
});

app.get('/img_rs5coupe', function(req, res){
    res.sendfile('img/RS5/rs5coupe.png'); 
});

app.get('/img_q8', function(req, res){
    res.sendfile('img/q8.png'); 
});

app.get('/img_icon', function(req, res){
    res.sendfile('img/audirings.png'); 
});

// load carousel images
app.get('/img_rs5FrontSide', function(req, res){
    res.sendfile('img/RS5/rs5FrontSide.jpeg'); 
});

app.get('/img_rs5Side', function(req, res){
    res.sendfile('img/RS5/rs5Side.jpeg'); 
});

app.get('/img_rs5RearSide', function(req, res){
    res.sendfile('img/RS5/rs5RearSide.jpeg'); 
});

app.get('/img_rs5Rear', function(req, res){
    res.sendfile('img/RS5/rs5Rear.jpeg'); 
});

app.get('/img_rs5Front', function(req, res){
    res.sendfile('img/RS5/rs5Front.jpeg'); 
});

app.get('/img_rs5Headlights', function(req, res){
    res.sendfile('img/RS5/rs5Headlights.jpeg'); 
});

app.get('/img_rs5Alloys', function(req, res){
    res.sendfile('img/RS5/rs5Alloys.jpeg'); 
});

app.get('/img_rs5RedFrontSeats', function(req, res){
    res.sendfile('img/RS5/rs5RedFrontSeats.jpeg'); 
});

app.get('/img_rs5Dash', function(req, res){
    res.sendfile('img/RS5/rs5Dash.jpeg'); 
});

app.get('/img_rs5RearSeats', function(req, res){
    res.sendfile('img/RS5/rs5RearSeats.jpeg'); 
});

//load engine page images
app.get('/img_displacement', function(req, res){
    res.sendfile('img/displacement.png'); 
});
app.get('/img_power', function(req, res){
    res.sendfile('img/power.png'); 
});

//load exterior page image items
app.get('/img_rs5grey', function(req, res){
    res.sendfile('img/RS5/rs5Grey.jpg'); 
});

app.get('/img_rs5Blue', function(req, res){
    res.sendfile('img/RS5/rs5Blue.jpg'); 
});

app.get('/img_rs5Alloys19', function(req, res){
    res.sendfile('img/RS5/rs5Alloys19.png'); 
});

app.get('/img_rs5Alloys20', function(req, res){
    res.sendfile('img/RS5/rs5Alloys20.png'); 
});

app.get('/img_rs5LEDp', function(req, res){
    res.sendfile('img/RS5/rs5LED.png'); 
});

app.get('/img_rs5Matrixp', function(req, res){
    res.sendfile('img/RS5/rs5Matrix.png'); 
});

app.get('/img_rs5BFrontSide', function(req, res){
    res.sendfile('img/RS5/rs5BFrontSide.jpeg'); 
});

app.get('/img_rs5BSide', function(req, res){
    res.sendfile('img/RS5/rs5BSide.jpeg'); 
});

app.get('/img_rs5BAlloys', function(req, res){
    res.sendfile('img/RS5/rs5BAlloys.jpeg'); 
});

app.get('/img_rs520Alloys', function(req, res){
    res.sendfile('img/RS5/rs520Alloys.jpeg'); 
});

app.get('/img_rs5Side20Alloy', function(req, res){
    res.sendfile('img/RS5/rs5Side20Alloy.jpeg'); 
});

app.get('/img_rs5LED', function(req, res){
    res.sendfile('img/RS5/rs5LED.jpeg'); 
});

app.get('/img_rs5Matrix', function(req, res){
    res.sendfile('img/RS5/rs5Matrix.jpeg'); 
});

//load interior page image items
app.get('/img_rs5SportSeat', function(req, res){
    res.sendfile('img/RS5/rs5SSportSeat.png');
});

app.get('/img_rs5RedStitch', function(req, res){
    res.sendfile('img/RS5/rs5RedStitch.jpg'); 
});

app.get('/img_rs5LunarStitch', function(req, res){
    res.sendfile('img/RS5/rs5LunarStitch.jpg'); 
});

app.get('/img_rs5LunarFrontSeat', function(req, res){
    res.sendfile('img/RS5/rs5LunarFrontSeat.jpeg'); 
});

app.get('/img_rs5RedFrontSeat', function(req, res){
    res.sendfile('img/RS5/rs5RedFrontSeat.jpeg'); 
});

//load equipment page image items
app.get('/img_rs5SideAssist', function(req, res){
    res.sendfile('img/RS5/rs5SideAssist.jpg'); 
});

app.get('/img_rs5DriverAssist', function(req, res){
    res.sendfile('img/RS5/rs5DriverAssistTour.jpg'); 
});

app.get('/img_rs5ParkingAssist', function(req, res){
    res.sendfile('img/RS5/rs5ParkingAssist.jpg'); 
});

app.get('/img_rs5Virtual', function(req, res){
    res.sendfile('img/RS5/rs5VirtualCockpit.jpg'); 
});

app.get('/img_rs5MMI', function(req, res){
    res.sendfile('img/RS5/rs5MMI.jpg'); 
});

app.get('/img_rs5B&O', function(req, res){
    res.sendfile('img/RS5/rs5B&O.jpg'); 
});

app.get('/img_rs5RearView', function(req, res){
    res.sendfile('img/RS5/rs5RearView.jpg'); 
});

app.get('/img_rs53Zone', function(req, res){
    res.sendfile('img/RS5/rs53zone.jpg'); 
});

app.get('/img_rs5AutoDoorMirrors', function(req, res){
    res.sendfile('img/RS5/rs5AutoDoorMirrors.jpg'); 
});

app.get('/img_rs5CArbonDoorMirrors', function(req, res){
    res.sendfile('img/RS5/rs5CarbonDoorMirrors.jpg'); 
});

app.get('/img_rs5Ceramic', function(req, res){
    res.sendfile('img/RS5/rs5CeramicBrakes.jpg'); 
});

app.get('/img_rs5Dynamic', function(req, res){
    res.sendfile('img/RS5/rs5DynamicSteering.jpg'); 
});

app.get('/img_rs5RedBrake', function(req, res){
    res.sendfile('img/RS5/rs5RedBrakeCalipers.jpg'); 
});

app.get('/img_rs5DRC', function(req, res){
    res.sendfile('img/RS5/rs5DRC.jpg'); 
});

app.get('/img_rs5FlatBottomWheel', function(req, res){
    res.sendfile('img/RS5/rs5FlatBottomWheel.jpg'); 
});

app.get('/img_rs5PanoRoof', function(req, res){
    res.sendfile('img/RS5/rs5PanoRoof.jpg'); 
});

app.get('/img_a1SB', function(req, res){
    res.sendfile('img/A1/a1SB.png'); 
});

app.get('/img_a1SB', function(req, res){
    res.sendfile('img/A1/a1SB.png');
});

var server = app.listen(9000, function(){
    console.log('Listening on port 9000');
});
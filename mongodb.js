var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost/27017/";

MongoClient.connect(url, {userNewUrlParser: tru},
	function(err, db) {
		var dbo = db.db("cars");
		var car = {name: "RS 5",
				   base price: "61,690.00",
				   power: "450",
				   displacement: "2894",
				   engine: "2.9 TFSI quattro tiptronic"};
		dbo.collection("cars").insert one(car, function(err, res){
			console.log("Added car to the DB");
			db.close();
		});
	});
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("soft352");
  var query = {_id: '31'};
  var cursor = dbo.collection('options').find(query).project({price:1, _id:0})(function(err, result){
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
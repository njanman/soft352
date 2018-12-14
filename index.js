var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/soft352";

MongoClient.connect(url, function(err, db) {
    if (err) {
        throw err;
    }else {
        console.log('connected');
    }

    var dbo = db.db('soft352');
    var query = {_id: 1};
    dbo.collection('options').find({_id:"1"}, {price:1, _id=0})(function(err, result){
        if (err) {
            throw err;
        }else {
            console.log(result);
        }
    });
});
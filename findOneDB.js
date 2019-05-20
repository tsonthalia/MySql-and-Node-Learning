var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://tsonthalia:Tanay1228@cluster0-wbuel.mongodb.net/test";

MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
  if (err) throw err;
  var dbo = db.db("sample_airbnb");
  dbo.collection("listingsAndReviews").find({}, { projection: { _id: 0, beds: 1} }).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});

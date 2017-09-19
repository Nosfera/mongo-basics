// Create server
var express = require("express");
var app = express();
var port = 5000;
// DB Handler
var mongoose = require("mongoose");

// Middleware parser
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define DB connection
	// pre-required
	// on terminal or console: 1. Create collection with Mongo
	// db.createCollection('tasks')

// Use Mongoose connect method to connect to the server
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/mylist")

// Finish DB connection

// Mongose Schema
var dataSchema = new mongoose.Schema({
	data1: String,
	data2: String
});

// postData is the collection created on /mylist DB
var postData = mongoose.model("postData", dataSchema);

// APP
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});


// Endpoint *addName* solving promise
	// *slash* adddata is what resolves the form in the html doc when hit the button-
app.post("/adddata", (req, res) => {
	var myData = new postData(req.body);
	 myData.save()
	 	.then(item => {
	 		res.send("item saved to database");
	 		console.log("item saved to database");
	 	})
	 	.catch(err => {
	 		res.status(400).send("unable to save to database");
	 	});
});

app.listen(port, () => {
	console.log("Server listening on port " + port);
});



/* No Mongoose version*/
// Local Connection URL
/*
var url = 'mongodb://localhost:27017/mylist';
var MongoClient = require('mongodb').MongoClient, assert = require('assert');
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  db.close();
});

var insertDocument = function(db, callback) {
   db.collection('tasks').insertOne( {
      "address" : {
         "street" : "0 AAAAAA",
         "zipcode" : "0000000",
         "building" : "BBBBBB",
         "coord" : [ -73.9557413, 40.7720266 ]
      },
      "borough" : "Buenos Aires",
      "cuisine" : "Italian",
      "grades" : [
         {
            "date" : new Date("2014-10-01T00:00:00Z"),
            "grade" : "A",
            "score" : 11
         },
         {
            "date" : new Date("2014-01-16T00:00:00Z"),
            "grade" : "B",
            "score" : 17
         }
      ],
      "name" : "CHANGO",
      "restaurant_id" : "0000000"
   }, function(err, result) {
    assert.equal(err, null);
    console.log("Inserted a document into the restaurants collection.");
    callback();
  });
};

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  insertDocument(db, function() {
      db.close();
  });
});
*/
console.log("IndexJS Loaded");
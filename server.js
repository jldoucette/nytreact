var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var Article = require("./models/Article.js");
var request = require("request");
mongoose.Promise = Promise;

var app = express();
var PORT = process.env.PORT || 3000;
var router = express.Router();
require("./app/config/routes1")(router);
app.use(router);

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));



app.use(express.static("./public"));

app.listen(PORT, function() {
  console.log("App running on port " + PORT+"!");
});

// mongoose.connect("mongodb:");
mongoose.connect("mongodb://localhost/nytreact");
var db = mongoose.connection;

db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");


app.get("/", function(req,res) {
    res.sendFile(__dirname+"/public/index.html");
});

app.get("/api", function(req, res) {

    Article.find({}).sort([
    ["date", "descending"]
  ]).limit(5).exec(function(err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
});

});

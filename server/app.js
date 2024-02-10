var express = require("express");
var mongoose = require("mongoose");

const mongoDB = "mongodb://localhost:27017/coffeeDB";
mongoose.connect(mongoDB);
mongoose.Promise = Promise;
const database = mongoose.connection;
database.on("error", console.error.bind(console, "MongoDB connection error:"));

var coffeeRouter = require("./routes/coffee");

const app = express();

app.use;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/coffees", coffeeRouter);

module.exports = app;

var express = require("express");
var mongoose = require("mongoose");

// Cloud DB connection string should be normally be stored in an environment variable for security, but for this project I'll just hardcode it here.
const mongoDB =
  "mongodb+srv://coffee-user:rP79WzP1EUuVmBYE@coffee-lister.66oxjjw.mongodb.net/?retryWrites=true&w=majority";
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

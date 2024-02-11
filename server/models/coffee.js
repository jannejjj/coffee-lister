var mongoose = require("mongoose");

const Schema = mongoose.Schema;

let coffeeSchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  weight: { type: String, required: true },
  price: { type: String, required: true },
  roastLevel: { type: String, required: true },
});

module.exports = mongoose.model("Coffee", coffeeSchema);

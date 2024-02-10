var express = require("express");
var router = express.Router();
const Coffee = require("../models/coffee");

router.get("/", function (req, res, next) {
  try {
    const coffees = Coffee.find({});
    res.json(coffees);
  } catch (error) {
    console.error(error);
    res.send({ error: "No coffees found." });
  }
});

router.post("/add", function (req, res, next) {
  new Coffee({
    name: req.body.name,
    weight: req.body.weight,
    price: req.body.price,
    roastLevel: req.body.roastLevel,
  }).save(function (err) {
    if (err) {
      console.error(err);
      res.status(500).send({ error: "Could not save coffee." });
    } else {
      res.json(Coffee.find({})); // Return all coffees, including the new one
    }
  });
});

module.exports = router;

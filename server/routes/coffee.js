var express = require("express");
var router = express.Router();
const Coffee = require("../models/coffee");

router.get("/", async (req, res) => {
  try {
    const coffees = await Coffee.find({});
    res.json(coffees);
  } catch (error) {
    console.error(error);
    res.send({ error: "No coffees found." });
  }
});

router.post("/add", async (req, res) => {
  const newCoffee = new Coffee({
    name: req.body.name,
    weight: req.body.weight,
    price: req.body.price,
    roastLevel: req.body.roastLevel,
  });

  try {
    newCoffee.save();
    const coffees = await Coffee.find({});
    res.send(coffees); // Return all coffees, including the new one
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Could not save coffee." });
  }
});

module.exports = router;

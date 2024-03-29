var express = require("express");
var router = express.Router();
const crypto = require("crypto");
const Coffee = require("../models/coffee");

router.get("/", async (req, res) => {
  try {
    const coffees = await Coffee.find({});
    if (coffees.length === 0) {
      res.send({ error: "No coffees in database. Save your first coffee!" });
    } else {
      res.json(coffees);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Error fetching coffees from database" });
  }
});

router.post("/add", async (req, res) => {
  const newCoffee = new Coffee({
    id: crypto.randomBytes(4).toString("hex"),
    name: req.body.name,
    weight: req.body.weight,
    price: req.body.price,
    roastLevel: req.body.roastLevel,
  });

  try {
    newCoffee.save();
    const coffees = await Coffee.find({});
    res.json(coffees); // Return all coffees, including the new one
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Could not save coffee." });
  }
});

router.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await Coffee.deleteOne({ id: id });
    const coffees = await Coffee.find({});
    if (coffees.length === 0) {
      res.send({ error: "No coffees in database. Save your first coffee!" });
    } else {
      res.json(coffees);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Could not delete coffee." });
  }
});

router.get("/search/:searchphrase", async (req, res, next) => {
  try {
    const coffees = await Coffee.find({
      name: { $regex: req.params.searchphrase, $options: "i" },
    });
    res.json(coffees);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Error fetching coffees from database" });
  }
});

module.exports = router;

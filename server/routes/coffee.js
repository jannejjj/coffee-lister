var express = require("express");
var router = express.Router();
const crypto = require("crypto");
const Coffee = require("../models/coffee");

router.get("/", async (req, res) => {
  try {
    const coffees = await Coffee.find({});
    if (coffees.length === 0) {
      res
        .status(404)
        .send({ error: "No coffees in database yet. Save your first coffee!" });
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
    res.send(coffees); // Return all coffees, including the new one
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
    res.send(coffees); // Return remaining coffees
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Could not delete coffee." });
  }
});

module.exports = router;

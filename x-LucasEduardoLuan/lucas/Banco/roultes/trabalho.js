const express = require("express");
const router = express.Router();



const trabalhosComtroler = require("../Controlers/TrabalhosControler");

router.post("/", trabalhosComtroler.create);

router.delete("/:id", trabalhosComtroler.remove);

module.exports = router;
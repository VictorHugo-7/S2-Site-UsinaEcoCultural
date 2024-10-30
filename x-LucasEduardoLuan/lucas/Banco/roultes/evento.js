const express = require("express");
const router = express.Router();


const eventosComtroler = require("../Controlers/EventosControler");

router.post("/", eventosComtroler.create);

router.delete("/:id", eventosComtroler.remove);

module.exports = router;
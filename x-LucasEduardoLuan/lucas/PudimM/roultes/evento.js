const express = require("express");
const router = express.Router();

const upload = require("../config/molterEV");

const eventosComtroler = require("../Controlers/EventosControler");

router.post("/", upload.single("file"), eventosComtroler.create);

router.delete("/:id", eventosComtroler.remove);

module.exports = router;
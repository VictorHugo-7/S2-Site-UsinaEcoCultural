const express = require("express");
const router = express.Router();

const upload = require("../config/multerTR");

const trabalhosComtroler = require("../Controlers/TrabalhosControler");

router.post("/", upload.single("file"), trabalhosComtroler.create);

router.delete("/:id", trabalhosComtroler.remove);

module.exports = router;
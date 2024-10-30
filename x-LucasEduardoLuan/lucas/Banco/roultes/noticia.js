const express = require("express");
const router = express.Router();



const noticiasComtroler = require("../Controlers/NoticiasControler");

router.post("/", noticiasComtroler.create);

router.delete("/:id", noticiasComtroler.remove);

module.exports = router;
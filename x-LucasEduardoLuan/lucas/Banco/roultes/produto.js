const express = require("express");
const router = express.Router();



const produtosComtroler = require("../Controlers/ProdutosControler");

router.post("/", produtosComtroler.create);

router.delete("/:id", produtosComtroler.remove);

module.exports = router;
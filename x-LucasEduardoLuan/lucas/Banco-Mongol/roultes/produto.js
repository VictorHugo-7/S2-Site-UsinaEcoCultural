const express = require("express");
const router = express.Router();

const upload = require("../config/mukterPR");

const produtosComtroler = require("../Controlers/ProdutosControler");

router.post("/", upload.single("file"), produtosComtroler.create);

router.delete("/:id", produtosComtroler.remove);

module.exports = router;
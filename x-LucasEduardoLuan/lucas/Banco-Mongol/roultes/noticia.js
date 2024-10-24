const express = require("express");
const router = express.Router();

const upload = require("../config/multerNT");

const noticiasComtroler = require("../Controlers/NoticiasControler");

router.post("/", upload.single("file"), noticiasComtroler.create);

router.delete("/:id", noticiasComtroler.remove);

module.exports = router;
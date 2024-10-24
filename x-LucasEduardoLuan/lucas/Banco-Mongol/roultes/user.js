const express = require("express");
const router = express.Router();

const usersComtroler = require("../Controlers/UsersControler");

router.post("/register", usersComtroler.register);

module.exports = router;
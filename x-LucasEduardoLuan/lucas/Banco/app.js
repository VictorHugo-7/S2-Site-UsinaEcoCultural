const express = require("express");
const app = express();

require("dotenv").config();
require("./db");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;

const eventoRouter = require("./roultes/evento");

app.use("/eventos", eventoRouter);

const noticiaRouter = require("./roultes/noticia");

app.use("/noticias", noticiaRouter);

const produtoRouter = require("./roultes/produto");

app.use("/produtos", produtoRouter);

const trabalhoRouter = require("./roultes/trabalho");

app.use("/trabalhos", trabalhoRouter);

const userRouter = require("./roultes/user");

app.use("/users", userRouter);

app.listen(port, () => {
    console.log(`O Servidor está rodando na porta ${port}`);
});
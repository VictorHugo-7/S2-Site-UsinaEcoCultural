const mongoose = require("mongoose");

const ProdutosSchema = mongoose.Schema({
    PRurl: {type: String, required: true},
    tituloPR: {type: String, required: true},
    diaPR: {type: String, requered: true},
    horaPR: {type: String, required: true},
    precoPR: {type: String, requered: true},
    descricaoPR: {type: String, required: true},
});

module.exports = mongoose.model("Produto", ProdutosSchema);
const mongoose = require("mongoose");

const TrabalhosSchema = mongoose.Schema({
    TRurl: {type: String, required: true},
    tituloTR: {type: String, required: true},
    diaTR: {type: String, requered: true},
    horaTR: {type: String, required: true},
    descricaoTR: {type: String, required: true},
});

module.exports = mongoose.model("Trabalho", TrabalhosSchema);
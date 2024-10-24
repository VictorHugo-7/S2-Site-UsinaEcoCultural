const mongoose = require("mongoose");

const NoticiasSchema = mongoose.Schema({
    nameIMNT: {type: String, require: true},
    NTsrc: {type: String, required: true},
    tituloNT: {type: String, required: true},
    diaNT: {type: String, requered: true},
    horaNT: {type: String, required: true},
    descricaoNT: {type: String, required: true},
});

module.exports = mongoose.model("Noticia", NoticiasSchema);
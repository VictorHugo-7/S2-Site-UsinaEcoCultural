const mongoose = require("mongoose");

const EventosSchema = mongoose.Schema({
    nameIMEV: {type: String, require: true},
    srcEV: {type: String, required: true},
    tituloEV: {type: String, required: true},
    diaEV: {type: String, required: true},
    horaEV: {type: String, required: true},
    localEV: {type: String, required: true},
    precoEV: {type: String, required: true},
    descricaoEV: {type: String, required: true}
});

module.exports = mongoose.model("Evento", EventosSchema);
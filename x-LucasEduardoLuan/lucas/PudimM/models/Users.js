const mongoose = require("mongoose");

const UsersSchema = mongoose.Schema({
    name: {type: String, require: true},
    email: {type: String, required: true},
    senha: {type: String, required: true},
    telefone: {type: String, requered: true},
});

module.exports = mongoose.model("User", UsersSchema);
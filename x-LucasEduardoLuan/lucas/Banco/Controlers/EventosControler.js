const Evento = require("../models/Eventos");

const fs = require("fs");

exports.create = async (req, res) => {
    try {

        const {urlEV, tituloEV, diaEV, horaEV, localEV, precoEV, descricaoEV } = req.body;

        console.log(req.body);

        if (!urlEV || !tituloEV || !diaEV || !horaEV || !localEV || !precoEV || !descricaoEV) {
            return res.status(400).json({ message: "Todos os campos são obrigatórios" });
        }

        const evento = new Evento({
            urlEV,
            tituloEV,
            diaEV,
            horaEV,
            localEV,
            precoEV,
            descricaoEV,
        });

        await evento.save();

        res.json({evento, msg: "tudo salvo bonitinho" });

        

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "erro ao salvar imagem" });
    }
};

exports.findAll = async (req, res) =>{
    try {
        const eventos = await Evento.find();

        res.json(eventos)
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "erro ao encontr imagem" });
    }
};

exports.remove = async(req, res) =>{
    try {

        const event = await Evento.findByIdAndDelete(req.params.id);

        if(!event){
            return res.status(404).json({message: "Evento não encontrado"});
        }

        //fs.unlinkSync(evento.src)

        res.json({message: "Informações excluidas"});
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "erro ao deletar" });
    }
};
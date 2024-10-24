const Evento = require("../models/Eventos");

const fs = require("fs");

exports.create = async (req, res) => {
    try {

        const { nameIMEV, srcEV, tituloEV, diaEV, horaEV, localEV, precoEV, descricaoEV } = req.body;

        /*const file = req.fiçe*/

        console.log(req.body);

        if (!nameIMEV || !srcEV || !tituloEV || !diaEV || !horaEV || !localEV || !precoEV || !descricaoEV) {
            return res.status(400).json({ message: "Todos os campos são obrigatórios" });
        }

        const evento = new Evento({
            nameIMEV,
            srcEV/*: file.path*/,
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
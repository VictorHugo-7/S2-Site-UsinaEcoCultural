const Noticia = require("../models/Noticias");
const bcrypt = require("bcrypt")

exports.create = async (req, res) => {
    try {

        const { NTurl, tituloNT, diaNT, horaNT, descricaoNT } = req.body;

        console.log(req.body);

        if (!NTurl || !tituloNT || !diaNT || !horaNT || !descricaoNT) {
            return res.status(400).json({ message: "Todos os campos são obrigatórios" });
        }

        const noticia = new Noticia({
            NTurl,
            tituloNT,
            diaNT,
            horaNT,
            descricaoNT,
        });

        await noticia.save();

        res.json({noticia, msg: "tudo salvo bonitinho" });

        

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "erro ao salvar imagem" });
    }
};

exports.findAll = async (req, res) =>{
    try {
        const noticias = await Noticia.find();

        res.json(noticias)
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "erro ao encontr imagem" });
    }
};

exports.remove = async(req, res) =>{
    try {

        const notici = await Noticia.findByIdAndDelete(req.params.id);

        if(!notici){
            return res.status(404).json({message: "Evento não encontrado"});
        }

        //fs.unlinkSync(evento.src)

        res.json({message: "Informações excluidas"});
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "erro ao deletar" });
    }
};
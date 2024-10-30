const Noticia = require("../models/Noticias");
const bcrypt = require("bcrypt")

exports.create = async (req, res) => {
    try {

        const { nameIMNT, NTsrc, tituloNT, diaNT, horaNT, descricaoNT } = req.body;

        /*const file = req.file*/

        console.log(req.body);

        if (!nameIMNT || !NTsrc || !tituloNT || !diaNT || !horaNT || !descricaoNT) {
            return res.status(400).json({ message: "Todos os campos são obrigatórios" });
        }

        const noticia = new Noticia({
            nameIMNT,
            NTsrc/*: file.path*/,
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
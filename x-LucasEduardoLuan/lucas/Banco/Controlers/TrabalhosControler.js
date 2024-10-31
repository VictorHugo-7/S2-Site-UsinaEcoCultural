const Trabalho = require("../models/Trabalhos");

exports.create = async (req, res) => {
    try {

        const { TRurl, tituloTR, diaTR, horaTR, descricaoTR } = req.body;

        console.log(req.body);

        if (!TRurl || !tituloTR || !diaTR || !horaTR || !descricaoTR) {
            return res.status(400).json({ message: "Todos os campos são obrigatórios" });
        }

        const trabalho = new Trabalho({
            TRurl,
            tituloTR,
            diaTR,
            horaTR,
            descricaoTR,
        });

        await trabalho.save();

        res.json({trabalho, msg: "tudo salvo bonitinho" });

        

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "erro ao salvar imagem" });
    }
};

exports.remove = async(req, res) =>{
    try {

        const traba = await Trabalho.findByIdAndDelete(req.params.id);

        if(!traba){
            return res.status(404).json({message: "Evento não encontrado"});
        }

        //fs.unlinkSync(evento.src)

        res.json({message: "Informações excluidas"});
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "erro ao deletar" });
    }
};
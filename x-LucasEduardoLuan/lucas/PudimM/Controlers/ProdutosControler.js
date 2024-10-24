const Produto = require("../models/Produtos");

exports.create = async (req, res) => {
    try {

        const { nameIMPR, PRsrc, tituloPR, diaPR, horaPR, precoPR, descricaoPR } = req.body;

        /*const file = req.file*/

        console.log(req.body);

        if (!nameIMPR || !PRsrc || !tituloPR || !diaPR || !horaPR || !precoPR || !descricaoPR) {
            return res.status(400).json({ message: "Todos os campos são obrigatórios" });
        }

        const produto = new Produto({
            nameIMPR,
            PRsrc/*: file.path*/,
            tituloPR,
            diaPR,
            horaPR,
            precoPR,
            descricaoPR,
        });

        await produto.save();

        res.json({produto, msg: "tudo salvo bonitinho" });

        

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "erro ao salvar imagem" });
    }
};

exports.remove = async(req, res) =>{
    try {

        const produt = await Produto.findByIdAndDelete(req.params.id);

        if(!produt){
            return res.status(404).json({message: "Evento não encontrado"});
        }

        //fs.unlinkSync(evento.src)

        res.json({message: "Informações excluidas"});
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "erro ao deletar" });
    }
};
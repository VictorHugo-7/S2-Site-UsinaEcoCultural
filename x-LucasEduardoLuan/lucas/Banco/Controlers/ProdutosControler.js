const Produto = require("../models/Produtos");

exports.create = async (req, res) => {
    try {

        const { PRurl, tituloPR, diaPR, horaPR, precoPR, descricaoPR } = req.body;

        console.log(req.body);

        if (!PRurl || !tituloPR || !diaPR || !horaPR || !precoPR || !descricaoPR) {
            return res.status(400).json({ message: "Todos os campos são obrigatórios" });
        }

        const produto = new Produto({
            PRurl,
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

exports.findAll = async (req, res) =>{
    try {
        const produtos = await Produto.find();

        res.json(produtos)
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "erro ao encontr imagem" });
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
const User = require("../models/Users");
const bcrypt = require("bcrypt")


exports.register = async (req, res) => {
    
    console.log(req.body);

    const {name, email, senha, confirmarsenha, telefone} = req.body

    if(!name) {
        return res.status(422).json({msg: "O nome é obrigatorio"})
    }

    if(!email) {
        return res.status(422).json({msg: "O email é obrigatorio"})
    }

    if(!senha) {
        return res.status(422).json({msg: "A senha é obrigatorio"})
    }

    if(senha !== confirmarsenha){
        return res.status(422).json({msg: "A senha não confere"})
    }

    if(!telefone){
        return res.status(422).json({msg: "O telefone é obrigatorio"})
    }

    const userexist = await User.findOne({ email: email })

    if(userexist){
        return res.status(422).json({msg: "Utilize outro email"})
    }

    const salt = await bcrypt.genSalt(12)
    const senhahash = await bcrypt.hash(senha, salt)

    const user = new User({
        name,
        email,
        senha,
        telefone
    })

    try {

        await user.save()

        res.status(200),json({msg: "usuario cadastrado"})
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "erro ao salvar user" });
    }
}
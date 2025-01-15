require('dotenv').config();

const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET;

const express = require('express')                             // Framework para criar o servidor e gerenciar rotas
const cors = require('cors')                                   // Middleware para permitir requisições de outras origens (CORS)
const mongoose = require('mongoose')                           // Biblioteca para conectar e interagir com o MongoDB
const uniqueValidator = require('mongoose-unique-validator')   // Plugin para validar campos únicos no banco de dados
const bcrypt = require('bcrypt')                               // Biblioteca para criptografar senhas
const jwt = require('jsonwebtoken')                            // Biblioteca para criar e validar JSON Web Tokens para autenticação

const app = express()                                          // Cria uma instância do aplicativo Express

app.use(express.json())                                        // Permite o back-end processar dados em formato JSON recebidos em requisições
app.use(cors())                                                // Habilita o CORS, permitindo acesso ao back-end de outras origens (ex., outro domínio ou porta)



// Conecta ao MongoDB usando o Mongoose
async function conectarAoMongoDB() {
    if (!MONGO_URL) {
        throw new Error("A variável MONGO_URL não está definida no arquivo .env");
    }
    await mongoose.connect(MONGO_URL); 
    console.log("Conectado ao MongoDB!");
}



// Define o modelo Usuario com campos login e senha | Schema
const usuarioSchema = mongoose.Schema({
    login: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});
usuarioSchema.plugin(uniqueValidator);                      
const Usuario = mongoose.model("Usuario", usuarioSchema);



// Endpoint para cadastrar novos usuários
app.post('/signup', async (req, res) => {
    try {
        const login = req.body.login;
        const password = req.body.password;
        
        const criptografada = await bcrypt.hash(password, 10);   

        const usuario = new Usuario({                           
            login: login,
            password: criptografada
        });
        
        const respMongo = await usuario.save();                  
        console.log(respMongo);

        res.status(201).end();                                   
    } catch (error) {
        console.log(error);
        res.status(409).end();                                   
    }
});



// Endpoint para autenticar usuários
app.post('/login', async (req, res) => {
    const login = req.body.login;
    const password = req.body.password;

    const u = await Usuario.findOne({ login: req.body.login });        // Busca o usuário pelo login
    if (!u) {
        return res.status(401).json({ mensagem: "login inválido" });   // Responde com erro se o login não existe
    }

    const senhaValida = await bcrypt.compare(password, u.password);    // Compara a senha fornecida com a senha armazenada
    if (!senhaValida) {
        return res.status(401).json({ mensagem: "senha inválida" });   // Responde com erro se a senha está incorreta
    }

    const token = jwt.sign(
        { login: login },
        JWT_SECRET, 
        { expiresIn: "1h" }
    );
    
    res.status(200).json({ token: token });                            // Responde com o token de autenticação
});



// Endpoint para listar todos os usuários
app.get('/users', async (req, res) => {
    try {
        const usuarios = await Usuario.find({}, { password: 0 }); // Retorna todos os usuários, mas exclui o campo de senha
        res.status(200).json(usuarios);
    } catch (error) {
        console.error('Erro ao buscar usuários:', error);
        res.status(500).json({ mensagem: 'Erro ao buscar usuários' });
    }
});



// Inicia o servidor na porta definida | Função de calback: função que é executada sempre que um evento acontece
app.listen(PORT, () => {
    try {
        conectarAoMongoDB();             
        console.log(`Servidor rodando na porta ${PORT}`);   
    } catch (e) {
        console.log('Erro', e);         
    }
});



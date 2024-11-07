const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Adicionando CORS

const app = express();
const PORT = 3000;

// Conexão com o MongoDB
mongoose.connect('mongodb+srv://24000205mauabr:Pudim@cluster0.nku6j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(() => console.log('Conectado ao MongoDB!'))
.catch((err) => console.error('Erro ao conectar ao MongoDB:', err));

// Middleware
app.use(cors()); // Permitir CORS
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Definindo o modelo de Evento
const eventoSchema = new mongoose.Schema({
    titulo: String,
    data: Date,
    horario: String,
    local: String,
    preco: Number,
    descricao: String,
    url: String
});

const Evento = mongoose.model('Evento', eventoSchema);

// Rota para salvar um novo evento
app.post('/api/eventos', async (req, res) => {
    console.log('Recebendo dados do evento:', req.body); // Log para verificar os dados recebidos
    try {
        const novoEvento = new Evento(req.body);
        const resultado = await novoEvento.save();
        res.status(201).send(resultado);
    } catch (error) {
        console.error('Erro ao salvar evento:', error);
        res.status(500).send('Erro ao salvar evento');
    }
});

app.get('/api/eventos', async (req, res) => {
    try {
        const eventos = await Evento.find(); // Busca todos os eventos no banco de dados
        res.status(200).send(eventos);
    } catch (error) {
        console.error('Erro ao buscar eventos:', error);
        res.status(500).send('Erro ao buscar eventos');
    }
});

const noticiaSchema = new mongoose.Schema({
    titulo: String,
    data: Date,
    horario: String,
    descricao: String,
    url: String
});

const Noticia = mongoose.model('Noticia', noticiaSchema);

// Rota para salvar um novo evento
app.post('/api/noticias', async (req, res) => {
    console.log('Recebendo dados da noticia:', req.body); // Log para verificar os dados recebidos
    try {
        const novoNoticia = new Noticia(req.body);
        const resultado = await novoNoticia.save();
        res.status(201).send(resultado);
    } catch (error) {
        console.error('Erro ao salvar noticia:', error);
        res.status(500).send('Erro ao salvar noticia');
    }
});

app.get('/api/noticias', async (req, res) => {
    try {
        const noticias = await Noticia.find(); // Busca todos os eventos no banco de dados
        res.status(200).send(noticias);
    } catch (error) {
        console.error('Erro ao buscar noticia:', error);
        res.status(500).send('Erro ao buscar noticia');
    }
});
// Iniciando o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
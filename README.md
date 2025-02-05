<!--TÍTULO-->
# Site Usina Eco-Cultural⠀<img src="https://i.gifer.com/ZdPH.gif" height="30px" alt="Planta">


<!--DESCRIÇÃO-->
| Descrição                                                                                                                                                                                                                                                                                                                                                     | Imagem                                    |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------|
| O site da Usina Eco-Cultural foi criado com o intuito de promover uma plataforma digital que amplie o alcance e a visibilidade das atividades culturais e ecológicas oferecidas pela instituição. <br><br> A Usina Eco-Cultural é um espaço voltado para o desenvolvimento sustentável e para a valorização da cultura local, promovendo eventos, oficinas, exposições e iniciativas educacionais com foco em sustentabilidade. | <img src="https://github.com/user-attachments/assets/6027eb8e-3478-406a-89e3-107630e06978" width="20000"/> |


<!--STATUS-->
## Status
> ✔ Concluído.


<!--FUNCIONALIDADES-->
## Funcionalidades
````
Usuário:
    . Fazer Cadastro
    . Fazer Login
    . Inscrever-se na Newsletter
    . Doar para Usina
    . Assinar Petição
    . Comprar na Loja
    . Enviar Mensagem para Usina

Administrador (ADM):
    . Todas as funções disponíveis para o usuário
    . Adicionar, Editar e Excluir: Eventos, Notícias, Trabalhos, Fotos, Vídeos
````


<!--TECNOLOGIAS-->
## Tecnologias
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" width="40"/> | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" width="40"/>   | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" width="40"/> | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" width="40"/> | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" width="40"/> | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" width="40"/> | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" width="40"/> |
|------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| HTML                                                                                                       | CSS                                                                                                        | JavaScript                                                                                                   | Bootstrap                                                                                                    | Node.js                                                                                                      | MongoDB                                                                                                      | Figma                                                                                                     |


<!--PROTÓTIPO-->
## Protótipo
![1](https://github.com/user-attachments/assets/255d55c0-152b-40d1-957d-ad7b1c1e2a65)


<!--PARTICIPANTES-->
## Participantes
| Nome                          | RA          | Contribuição                       |
|-------------------------------|-------------|------------------------------------|
| Eduardo Aguiar Leite da Silva | 24.00380-8  | Front-End                          |
| Luan Camara Lopes             | 24.00376-0  | Documentação                       |
| Lucas De Mattia Peres         | 24.00020-5  | Back-End                           |
| Victor Hugo Pinho             | 24.00947-4  | Front-End, Back-End, Design(figma) |


<!--DEPENDÊNCIAS-->
## Dependências
````
axios                     | versão ^1.7.8  | Biblioteca para requisições HTTP.
bcrypt                    | versão ^5.1.1  | Hashing de senhas para segurança.
cors                      | versão ^2.8.5  | Habilita CORS para requisições entre origens.
dotenv                    | versão ^16.4.7 | Gerenciamento de variáveis de ambiente.
express                   | versão ^4.21.1 | Framework para criar servidores web e APIs.
jsonwebtoken              | versão ^9.0.2  | Geração e verificação de tokens JWT.
mongoose                  | versão ^8.8.3  | ODM para trabalhar com MongoDB em Node.js.
mongoose-unique-validator | versão ^4.0.1  | Validação de unicidade para Mongoose.
nodemon                   | versão ^3.1.7  | Reinicia o servidor ao detectar mudanças no código.
````


<!--COMO UTILIZAR-->
## Como Utilizar
````
1. Clone o repositóro                 | git clone https://github.com/VictorHugo-7/S2-Site-UsinaEcoCultural.git

2. Navegue até o diretório do projeto | cd S2-Site-UsinaEcoCultural

3. Instale as dependências            | npm install

4. Configure as variáveis de ambiente | PORT=3000
                                      | MONGO_URI=mongodb://localhost:27017/nome-do-banco
                                      | JWT_SECRET=sua_chave_secreta

5. Inicialize o servidor              | npm start

6. Abra o start.html                  | Hospede usando um servidor HTTP local (como o VS Code Live Server).
````


<!--CONTRIBUIÇÃO-->
## Contribuição
````
1. Fork               | Crie uma cópia do repositório no seu perfil

2. Clone              | git clone https://github.com/VictorHugo-7/S2-Site-UsinaEcoCultural

3. Crie uma Branch    | git checkout -b minha-branch

4. Faça as Alterações | Edite os arquivos e teste.

5. Commit e Push      | git add .
                      |	git commit -m "Descrição das alterações" 
                      |	git push origin minha-branch

6. Pull Request       | Solicite a inclusão de suas mudanças no repositório original.
````


<!--LICENÇA-->
## Licença
[Veja a licença](https://github.com/VictorHugo-7/S2-Site-UsinaEcoCultural/blob/main/LICENSE)


<!--ESTRUTURA DE PASTAS-->
## Estrutura de Pastas
````
├── css/
│   ├── components/
│   │   ├── _import.css
│   │   ├── cadastro.css
│   │   ├── login.css
│   │   ├── menu.css
│   │   ├── recuperarSenha.css
│   │   └── rodape.css
│   ├── global/
│   │   ├── _import.css
│   │   ├── fonts.css
│   │   ├── normalize.css
│   │   └── variables.css
│   └── pages/
│       ├── ajuda/
│       │   ├── _import.css
│       │   └── section1.css
│       ├── boletim/
│       │   ├── _import.css
│       │   └── section1.css
│       ├── contato/
│       │   ├── _import.css
│       │   └── section1.css
│       ├── divulgacao_eventos/
│       │   ├── _import.css
│       │   └── section1.css
│       ├── divulgacao_galeriaFotos/
│       │   ├── _import.css
│       │   └── section1.css
│       ├── divulgacao_galeriaVideos/
│       │   ├── _import.css
│       │   └── section1.css
│       ├── divulgacao_noticias/
│       │   ├── _import.css
│       │   └── section1.css
│       ├── divulgacao_trabalhos/
│       │   ├── _import.css
│       │   └── section1.css
│       ├── doacao/
│       │   ├── _import.css
│       │   ├── section1.css
│       │   └── section2.css
│       ├── doacao_natal/
│       │   ├── _import.css
│       │   ├── section1.css
│       │   └── section2.css
│       ├── estatisticas/
│       │   ├── _import.css
│       │   └── section1.css
│       ├── historia/
│       │   ├── _import.css
│       │   ├── section1.css
│       │   ├── section2.css
│       │   ├── section3.css
│       │   ├── section4.css
│       │   └── section5.css
│       ├── impacto/
│       │   ├── _import.css
│       │   ├── section1.css
│       │   ├── section2.css
│       │   ├── section3.css
│       │   ├── section4.css
│       │   └── section5.css
│       ├── index/
│       │   ├── _import.css
│       │   ├── section1.css
│       │   ├── section2.css
│       │   ├── section3.css
│       │   └── section4.css
│       ├── loja/
│       │   ├── _import.css
│       │   └── section1.css
│       ├── parcerias/
│       │   ├── _import.css
│       │   ├── section1.css
│       │   ├── section2.css
│       │   └── section3.css
│       ├── peticao/
│       │   ├── _import.css
│       │   └── section1.css
│       ├── politicaDePrivacidade/
│       │   ├── _import.css
│       │   └── section1.css
│       ├── termosDeUso/
│       │   ├── _import.css
│       │   └── section1.css
│       └── usuarios/
│           ├── _import.css
│           └── section1.css
├── html/
│   ├── components/
│   │   ├── acessibilidadeLibras.html
│   │   ├── acessibilidadeVoice.html
│   │   ├── cadastro.html
│   │   ├── login.html
│   │   ├── menu.html
│   │   ├── recuperarSenha.html
│   │   └── rodape.html
│   └── pages/
│       ├── ajuda/
│       │   ├── ajuda.html
│       │   └── section1.html
│       ├── boletim/
│       │   ├── boletim.html
│       │   └── section1.html
│       ├── contato/
│       │   ├── contato.html
│       │   └── section1.html
│       ├── divulgacao_eventos/
│       │   ├── eventos.html
│       │   └── section1.html
│       ├── divulgacao_galeriaFotos/
│       │   ├── galeriaFotos.html
│       │   └── section1.html
│       ├── divulgacao_galeriaVideos/
│       │   ├── galeriaVideos.html
│       │   └── section1.html
│       ├── divulgacao_noticias/
│       │   ├── noticias.html
│       │   └── section1.html
│       ├── divulgacao_trabalhos/
│       │   ├── section1.html
│       │   └── trabalhos.html
│       ├── doacao/
│       │   ├── doacao.html
│       │   ├── section1.html
│       │   └── section2.html
│       ├── doacao_natal/
│       │   ├── doacao_natal.html
│       │   ├── section1.html
│       │   └── section2.html
│       ├── estatisticas/
│       │   ├── estatisticas.html
│       │   └── section1.html
│       ├── historia/
│       │   ├── historia.html
│       │   ├── section1.html
│       │   ├── section2.html
│       │   ├── section3.html
│       │   ├── section4.html
│       │   └── section5.html
│       ├── impacto/
│       │   ├── impacto.html
│       │   ├── section1.html
│       │   ├── section2.html
│       │   ├── section3.html
│       │   ├── section4.html
│       │   └── section5.html
│       ├── index/
│       │   ├── index.html
│       │   ├── section1.html
│       │   ├── section2.html
│       │   ├── section3.html
│       │   └── section4.html
│       ├── loja/
│       │   ├── loja.html
│       │   └── section1.html
│       ├── parcerias/
│       │   ├── parcerias.html
│       │   ├── section1.html
│       │   ├── section2.html
│       │   └── section3.html
│       ├── peticao/
│       │   ├── peticao.html
│       │   └── section1.html
│       ├── politicaDePrivacidade/
│       │   ├── politicaDePrivacidade.html
│       │   └── section1.html
│       ├── termosDeUso/
│       │   ├── section1.html
│       │   └── termosDeUso.html
│       └── usuarios/
│           ├── section1.html
│           └── usuarios.html
├── js/
│   ├── componentes/
│   │   ├── acessibilidadeLibras.js
│   │   ├── acessibilidadeVoice.js
│   │   ├── cadastro.js
│   │   ├── login.js
│   │   ├── menu.js
│   │   ├── recuperarSenha.js
│   │   └── rodape.js
│   └── pages/
│       ├── ajuda/
│       │   └── section1.js
│       ├── boletim/
│       │   └── section1.js
│       ├── contato/
│       │   └── section1.js
│       ├── divulgacao_eventos/
│       │   └── section1.js
│       ├── divulgacao_galeriaFotos/
│       │   └── section1.js
│       ├── divulgacao_galeriaVideos/
│       │   └── section1.js
│       ├── divulgacao_noticias/
│       │   └── section1.js
│       ├── divulgacao_trabalhos/
│       │   └── section1.js
│       ├── doacao/
│       │   ├── section1.js
│       │   └── section2.js
│       ├── doacao_natal/
│       │   ├── section1.js
│       │   └── section2.js
│       ├── estatisticas/
│       │   └── section1.js
│       ├── historia/
│       │   ├── section1.js
│       │   ├── section2.js
│       │   ├── section3.js
│       │   ├── section4.js
│       │   └── section5.js
│       ├── impacto/
│       │   ├── section1.js
│       │   ├── section2.js
│       │   ├── section3.js
│       │   ├── section4.js
│       │   └── section5.js
│       ├── index/
│       │   ├── section1.js
│       │   ├── section2.js
│       │   ├── section3.js
│       │   └── section4.js
│       ├── loja/
│       │   └── section1.js
│       ├── parcerias/
│       │   ├── section1.js
│       │   ├── section2.js
│       │   └── section3.js
│       ├── peticao/
│       │   └── section1.js
│       ├── politicaDePrivacidade/
│       │   └── section1.js
│       ├── termosDeUso/
│       │   └── section1.js
│       └── usuarios/
│           └── section1.js
├── midias/
│   ├── favicon/
│   │   └── site.webmanifest
│   └── img/
│       ├── global/
│       └── pages/
│           ├── boletim/
│	    ├── doacao/
│	    ├── historia/
│	    ├── impacto/
│	    ├── index/
│	    └── parcerias/
├── .gitignore
├── LICENSE
├── README.md
├── backend.js
├── package-lock.json
├── package.json
├── start.html
````


<!--ESTATÍSTICAS-->
## Estatísticas 
![](https://visitor-badge.laobi.icu/badge?page_id=VictorHugo-7.Site-Usina)
![Tamanho do Repositório](https://img.shields.io/github/repo-size/VictorHugo-7/Site-Usina)
![Linguagens](https://img.shields.io/github/languages/top/VictorHugo-7/Site-Usina)

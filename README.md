<!--TÍTULO-->
# Site Usina Eco-Cultural⠀


<!--DESCRIÇÃO-->
> Site desenvolvido para a Usina Eco-Cultural. <br/>
> O site consiste em uma plataforma digital que amplia o alcance e a visibilidade das atividades culturais e ecológicas oferecidas pela instituição.


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

Administrador:
    . Todas as funções disponíveis para o usuário
    . Adicionar, Editar e Excluir: Produtos da Loja, Eventos, Notícias, Trabalhos, Fotos, Vídeos
````


<!--TECNOLOGIAS-->
## Tecnologias
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" width="40"/> | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" width="40"/>   | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" width="40"/> | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" width="40"/> | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" width="40"/> | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" width="40"/> | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" width="40"/> |
|------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| HTML                                                                                                       | CSS                                                                                                        | JavaScript                                                                                                   | Bootstrap                                                                                                    | Node.js                                                                                                      | MongoDB                                                                                                      | Figma                                                                                                     |


<!--PROTÓTIPO-->
## Protótipo
[![](https://img.shields.io/badge/Figma--5C5C5C?logo=figma&logoColor=white)]()


<!--PARTICIPANTES-->
## Participantes
| Nome                          |
|-------------------------------|
| Eduardo Aguiar Leite da Silva |
| Luan Camara Lopes             |
| Lucas De Mattia Peres         |
| Victor Hugo Pinho             |


<!--DEPENDÊNCIAS-->
## Dependências
````
axios                     | versão ^1.8.4  | Biblioteca para requisições HTTP.
bcrypt                    | versão ^5.1.1  | Hashing de senhas para segurança.
cors                      | versão ^2.8.5  | Habilita CORS para requisições entre origens.
dotenv                    | versão ^16.4.7 | Gerenciamento de variáveis de ambiente.
express                   | versão ^4.21.2 | Framework para criar servidores web e APIs.
jsonwebtoken              | versão ^9.0.2  | Geração e verificação de tokens JWT.
mongoose                  | versão ^7.0.0  | ODM para trabalhar com MongoDB em Node.js.
mongoose-unique-validator | versão ^4.0.1  | Validação de unicidade para Mongoose.
nodemon                   | versão ^3.1.9  | Reinicia o servidor ao detectar mudanças no código.
````


<!--COMO UTILIZAR-->
## Como Utilizar
````
Requisitos:
   . Node.js 16+ para executar o backend
   . npm para gerenciador de pacotes
   . MongoDB 5.0+ para banco de dados NoSQL
   . IDE (VS Code recomendado com Live Server)

Execução:
    1. Clone o repositóro                 | git clone https://github.com/VictorHugo-7/S2-Site-UsinaEcoCultural

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
│			├── divulgacao_eventos/
│			├── divulgacao_galeriaFotos/
│			├── divulgacao_noticias/
│			├── divulgacao_trabalhos/
│	        ├── doacao/
│	        ├── historia/
│	        ├── impacto/
│	        ├── index/
│			├── loja/
│	        └── parcerias/
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


<!--LICENÇA-->
## Licença
[Veja a licença](https://github.com/VictorHugo-7/S2-Site-UsinaEcoCultural/blob/main/LICENSE)

/* Checar se é adm  */
function checkLogin() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    if (email === 'adm' && password === '123') {
        localStorage.setItem('isAdmin', 'true');
        var loginModal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
        loginModal.hide();
        showAdmIcone();                    // Mostra o ícone de adm
        showEditButtonEventosProximos();   // Mostra o botão de editar
        showEditButtonNoticiasAtuais();    // Mostra o botão de editar
        showAcoesEventos();                // Mostra os botões de ação
        showAcoesNoticias();               // Mostra os botões de ação para notícias
        showAcoesTrabalhos();              // Mostra os botões de ação para trabalhos
        showAcoesGaleriaFotos();           // Mostra os botões de ação para galeria de fotos
        showAcoesGaleriaVideos();          // Mostra os botões de ação para galeria de vídeos
        alert('Login como admin bem-sucedido!');
    } else {
        localStorage.setItem('isAdmin', 'false');
        var loginModal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
        loginModal.hide();
        hideAdmIcone();                      // Esconde o ícone de adm
        hideEditButtonEventosProximos();     // Esconde o botão de editar
        hideEditButtonNoticiasAtuais();      // Esconde o botão de editar
        hideAcoesEventos();                  // Esconde os botões de ação
        hideAcoesNoticias();                 // Esconde os botões de ação para notícias
        hideAcoesTrabalhos();                // Esconde os botões de ação para trabalhos
        hideAcoesGaleriaFotos();             // Esconde os botões de ação para galeria de fotos
        hideAcoesGaleriaVideos();            // Esconde os botões de ação para galeria de vídeos
        alert('Erro: credenciais inválidas! Tente novamente.');
    }
}


/* Mostrar Coisas ADM */
function showAdmIcone() {
    const admIcone = document.getElementById('admIcone');
    if (admIcone) {
        admIcone.style.display = 'inline-block';
    }
}

function showEditButtonEventosProximos() {
    const editButtonEventosProximos = document.getElementById('editButtonEventosProximos');
    if (editButtonEventosProximos) {
        editButtonEventosProximos.style.display = 'block';
    }
}

function showEditButtonNoticiasAtuais() {
    const editButtonNoticiasAtuais = document.getElementById('editButtonNoticiasAtuais');
    if (editButtonNoticiasAtuais) {
        editButtonNoticiasAtuais.style.display = 'block';
    }
}

function showAcoesEventos() {
    const buttons = document.querySelectorAll('.btn-success, .btn-secondary, .btn-danger, .btn-info');
    buttons.forEach(button => {
        button.style.display = 'inline-block';
    });
}

function showAcoesNoticias() {
    const buttonsNoticias = document.querySelectorAll('.btn-success, .btn-secondary, .btn-danger, .btn-info');
    buttonsNoticias.forEach(button => {
        button.style.display = 'inline-block';
    });
}

function showAcoesTrabalhos() {
    const buttonsTrabalhos = document.querySelectorAll('.btn-success, .btn-secondary, .btn-danger');
    buttonsTrabalhos.forEach(button => {
        button.style.display = 'inline-block';
    });
}

// Função para exibir os botões da galeria de fotos
function showAcoesGaleriaFotos() {
    const buttonsGaleriaFotos = document.querySelectorAll('.btn-success, .btn-secondary, .btn-danger');
    buttonsGaleriaFotos.forEach(button => {
        button.style.display = 'inline-block';
    });
}

// Função para exibir os botões da galeria de vídeos
function showAcoesGaleriaVideos() {
    const buttonsGaleriaVideos = document.querySelectorAll('.btn-success, .btn-secondary, .btn-danger');
    buttonsGaleriaVideos.forEach(button => {
        button.style.display = 'inline-block';
    });
}


/* Ocultar Coisas ADM */
function hideAdmIcone() {
    const admIcone = document.getElementById('admIcone');
    if (admIcone) {
        admIcone.style.display = 'none';
    }
}

function hideEditButtonEventosProximos() {
    const editButtonEventosProximos = document.getElementById('editButtonEventosProximos');
    if (editButtonEventosProximos) {
        editButtonEventosProximos.style.display = 'none';
    }
}

function hideEditButtonNoticiasAtuais() {
    const editButtonNoticiasAtuais = document.getElementById('editButtonNoticiasAtuais');
    if (editButtonNoticiasAtuais) {
        editButtonNoticiasAtuais.style.display = 'none';
    }
}

function hideAcoesEventos() {
    const buttons = document.querySelectorAll('.btn-success, .btn-secondary, .btn-danger, .btn-info');
    buttons.forEach(button => {
        button.style.display = 'none';
    });
}

function hideAcoesNoticias() {
    const buttonsNoticias = document.querySelectorAll('.btn-success, .btn-secondary, .btn-danger, .btn-info');
    buttonsNoticias.forEach(button => {
        button.style.display = 'none';
    });
}

function hideAcoesTrabalhos() {
    const buttonsTrabalhos = document.querySelectorAll('.btn-success, .btn-secondary, .btn-danger');
    buttonsTrabalhos.forEach(button => {
        button.style.display = 'none';
    });
}

// Função para esconder os botões da galeria de fotos
function hideAcoesGaleriaFotos() {
    const buttonsGaleriaFotos = document.querySelectorAll('.btn-success, .btn-secondary, .btn-danger');
    buttonsGaleriaFotos.forEach(button => {
        button.style.display = 'none';
    });
}

// Função para esconder os botões da galeria de vídeos
function hideAcoesGaleriaVideos() {
    const buttonsGaleriaVideos = document.querySelectorAll('.btn-success, .btn-secondary, .btn-danger');
    buttonsGaleriaVideos.forEach(button => {
        button.style.display = 'none';
    });
}


// Verificar se o usuário já está logado como admin ao carregar a página
document.addEventListener('DOMContentLoaded', function () {
    const isAdmin = localStorage.getItem('isAdmin');
    if (isAdmin === 'true') {
        showAdmIcone();
        showEditButtonEventosProximos();
        showEditButtonNoticiasAtuais();
        showAcoesEventos();
        showAcoesNoticias();
        showAcoesTrabalhos();
        showAcoesGaleriaFotos();  // Mostra os botões da galeria de fotos se for adm
        showAcoesGaleriaVideos(); // Mostra os botões da galeria de vídeos se for adm
    } else {
        hideAdmIcone();
        hideEditButtonEventosProximos();
        hideEditButtonNoticiasAtuais();
        hideAcoesEventos();
        hideAcoesNoticias();
        hideAcoesTrabalhos();
        hideAcoesGaleriaFotos();  // Esconde os botões da galeria de fotos se não for adm
        hideAcoesGaleriaVideos(); // Esconde os botões da galeria de vídeos se não for adm
    }
});





/* ----------------------------------------------------------------------------------------------- */


fetch('../../components/login.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('my-login-importacao').innerHTML = data;

        // Função para o login (mostrar/ocultar senha)
        const toggleLoginPassword = document.querySelector('#toggleLoginPassword');
        const loginPassword = document.querySelector('#loginPassword');
        const loginEyeIcon = document.querySelector('#loginEyeIcon');

        toggleLoginPassword.addEventListener('click', function () {
            const type = loginPassword.getAttribute('type') === 'password' ? 'text' : 'password';
            loginPassword.setAttribute('type', type);
            loginEyeIcon.classList.toggle('fa-eye');
            loginEyeIcon.classList.toggle('fa-eye-slash');
        });

        // Adicionar evento ao botão de login para chamar checkLogin()
        const loginButton = document.querySelector('.my-login-btnEntrar');
        if (loginButton) {
            loginButton.addEventListener('click', checkLogin);
        }
    })
    .catch(error => console.error('Erro ao carregar a página:', error));


    
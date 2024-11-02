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
        alert('Erro: credenciais inválidas! Tente novamente.');
    }
}


/* Mostrar Coisas ADM */
function showAdmIcone() {
    const admIcone = document.getElementById('admIcone');
    if (admIcone) {
        admIcone.style.display = 'inline-block'; // Exibe o botão de admin
    }
}

function showEditButtonEventosProximos() {
    const editButtonEventosProximos = document.getElementById('editButtonEventosProximos');
    if (editButtonEventosProximos) {
        editButtonEventosProximos.style.display = 'block'; // Mostra o botão de editar
    }
}

function showEditButtonNoticiasAtuais() {
    const editButtonNoticiasAtuais = document.getElementById('editButtonNoticiasAtuais');
    if (editButtonNoticiasAtuais) {
        editButtonNoticiasAtuais.style.display = 'block'; // Mostra o botão de editar
    }
}

function showAcoesEventos() {
    const buttons = document.querySelectorAll('.btn-success, .btn-secondary, .btn-danger, .btn-info');
    buttons.forEach(button => {
        button.style.display = 'inline-block'; // Exibe todos os botões de ação
    });
}

function showAcoesNoticias() {
    const buttonsNoticias = document.querySelectorAll('.btn-success, .btn-secondary, .btn-danger, .btn-info');
    buttonsNoticias.forEach(button => {
        button.style.display = 'inline-block'; // Exibe todos os botões de ação
    });
}

function showAcoesTrabalhos() {
    const buttonsTrabalhos = document.querySelectorAll('.btn-success, .btn-secondary, .btn-danger'); // Botões para trabalhos
    buttonsTrabalhos.forEach(button => {
        button.style.display = 'inline-block'; // Exibe todos os botões de ação para trabalhos
    });
}


/* Ocultar Coisas ADM */
function hideAdmIcone() {
    const admIcone = document.getElementById('admIcone');
    if (admIcone) {
        admIcone.style.display = 'none'; // Esconde o botão de admin
    }
}

function hideEditButtonEventosProximos() {
    const editButtonEventosProximos = document.getElementById('editButtonEventosProximos');
    if (editButtonEventosProximos) {
        editButtonEventosProximos.style.display = 'none'; // Esconde o botão de editar
    }
}

function hideEditButtonNoticiasAtuais() {
    const editButtonNoticiasAtuais = document.getElementById('editButtonNoticiasAtuais');
    if (editButtonNoticiasAtuais) {
        editButtonNoticiasAtuais.style.display = 'none'; // Esconde o botão de editar
    }
}

function hideAcoesEventos() {
    const buttons = document.querySelectorAll('.btn-success, .btn-secondary, .btn-danger, .btn-info');
    buttons.forEach(button => {
        button.style.display = 'none'; // Esconde todos os botões de ação
    });
}

function hideAcoesNoticias() {
    const buttonsNoticias = document.querySelectorAll('.btn-success, .btn-secondary, .btn-danger, .btn-info');
    buttonsNoticias.forEach(button => {
        button.style.display = 'none'; // Esconde todos os botões de ação
    });
}

function hideAcoesTrabalhos() {
    const buttonsTrabalhos = document.querySelectorAll('.btn-success, .btn-secondary, .btn-danger'); // Botões para trabalhos
    buttonsTrabalhos.forEach(button => {
        button.style.display = 'none'; // Esconde todos os botões de ação para trabalhos
    });
}


// Verificar se o usuário já está logado como admin ao carregar a página
document.addEventListener('DOMContentLoaded', function () {
    const isAdmin = localStorage.getItem('isAdmin');
    if (isAdmin === 'true') {
        showAdmIcone();                  // Mostra o ícone de adm se for adm
        showEditButtonEventosProximos(); // Mostra o botão de editar se for adm
        showEditButtonNoticiasAtuais();  // Mostra o botão de editar se for adm
        showAcoesEventos();              // Mostra os botões de ação se for adm
        showAcoesNoticias();             // Mostra os botões de ação para notícias se for adm
        showAcoesTrabalhos();            // Mostra os botões de ação para trabalhos se for adm
    } else {
        hideAdmIcone();                  // Esconde o ícone de adm se não for adm
        hideEditButtonEventosProximos(); // Esconde o botão de editar se não for adm
        hideEditButtonNoticiasAtuais();  // Esconde o botão de editar se não for adm
        hideAcoesEventos();              // Esconde os botões de ação se não for adm
        hideAcoesNoticias();             // Esconde os botões de ação para notícias se não for adm
        hideAcoesTrabalhos();            // Esconde os botões de ação para trabalhos se não for adm
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


    
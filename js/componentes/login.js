
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
        alert('Login como admin bem-sucedido!');
    } else {
        localStorage.setItem('isAdmin', 'false');
        var loginModal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
        loginModal.hide();
        hideAdmIcone();                      // Esconde o ícone de adm
        hideEditButtonEventosProximos();     // Esconde o botão de editar
        hideEditButtonNoticiasAtuais();      // Esconde o botão de editar
        alert('Login como usuário bem-sucedido!');
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


// Verificar se o usuário já está logado como admin ao carregar a página
document.addEventListener('DOMContentLoaded', function () {
    const isAdmin = localStorage.getItem('isAdmin');
    if (isAdmin === 'true') {
        showAdmIcone();                  // Mostra o icone de adm se for adm
        showEditButtonEventosProximos(); // Mostra o botão de editar se for adm
        showEditButtonNoticiasAtuais();  // Mostra o botão de editar se for adm

    } else {
        hideAdmIcone();                  // Esconde o icone de adm se for adm
        hideEditButtonEventosProximos(); // Esconde o botão de editar se não for adm
        hideEditButtonNoticiasAtuais();  // Mostra o botão de editar se for adm

    }
});


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


    
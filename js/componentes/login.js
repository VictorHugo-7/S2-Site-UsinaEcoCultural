function checkLogin() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Verificar se o email e a senha são os de admin
    if (email === 'adm' && password === '123') {
        localStorage.setItem('isAdmin', 'true');
        var loginModal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
        loginModal.hide();
        showAdminButton();  // Mostra o botão de admin
        showEditButton3();   // Mostra o botão de editar
        showEditButton4();   // Mostra o botão de editar

        alert('Login como admin bem-sucedido!');
    } else {
        localStorage.setItem('isAdmin', 'false');
        var loginModal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
        loginModal.hide();
        hideAdminButton();  // Esconde o botão de admin
        hideEditButton3();   // Esconde o botão de editar
        hideEditButton4();   // Esconde o botão de editar
        alert('Login realizado com sucesso, mas você não tem acesso como admin.');
    }
}

// Função para mostrar o botão de admin no menu
function showAdminButton() {
    const adminButton = document.getElementById('adminButton');
    if (adminButton) {
        adminButton.style.display = 'inline-block'; // Exibe o botão de admin
    }
}

// Função para esconder o botão de admin no menu
function hideAdminButton() {
    const adminButton = document.getElementById('adminButton');
    if (adminButton) {
        adminButton.style.display = 'none'; // Esconde o botão de admin
    }
}

// Função para mostrar o botão de editar
function showEditButton3() {
    const editButton3 = document.getElementById('editButton-s3');
    if (editButton3) {
        editButton3.style.display = 'block'; // Mostra o botão de editar
    }
}

// Função para esconder o botão de editar
function hideEditButton3() {
    const editButton3 = document.getElementById('editButton-s3');
    if (editButton3) {
        editButton3.style.display = 'none'; // Esconde o botão de editar
    }
}

// Função para mostrar o botão de editar
function showEditButton4() {
    const editButton4 = document.getElementById('editButton-s4');
    if (editButton4) {
        editButton4.style.display = 'block'; // Mostra o botão de editar
    }
}

// Função para esconder o botão de editar
function hideEditButton4() {
    const editButton4 = document.getElementById('editButton-s4');
    if (editButton4) {
        editButton4.style.display = 'none'; // Esconde o botão de editar
    }
}


// Verificar se o usuário já está logado como admin ao carregar a página
document.addEventListener('DOMContentLoaded', function () {
    const isAdmin = localStorage.getItem('isAdmin');
    if (isAdmin === 'true') {
        showAdminButton();
        showEditButton3(); // Mostra o botão de editar se for admin
        showEditButton4(); // Mostra o botão de editar se for admin

    } else {
        hideAdminButton();
        hideEditButton3(); // Esconde o botão de editar se não for admin
        showEditButton4(); // Mostra o botão de editar se for admin

    }
});

// Função para carregar o componente de login
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

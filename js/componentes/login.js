// Função para verificar o status de administrador e exibir o ícone e os botões restritos
function checkAdminStatus() {
    const isAdmin = localStorage.getItem('isAdmin');
    const admIcone = document.getElementById('admIcone');

    // Exibe ou oculta o ícone de administrador
    if (admIcone) {
        admIcone.style.display = isAdmin === 'true' ? 'inline-block' : 'none';
    }

    // Exibe ou oculta botões com a classe `admin-only` para administradores
    const adminButtons = document.querySelectorAll('.admin-only');
    adminButtons.forEach(button => {
        button.style.display = isAdmin === 'true' ? 'inline-block' : 'none';
    });
}

// Função para o login
function checkLogin() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    if (email === 'adm' && password === '123') {
        localStorage.setItem('isAdmin', 'true');
        const loginModal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
        loginModal.hide();
        alert('Login como admin bem-sucedido!');
    } else {
        localStorage.setItem('isAdmin', 'false');
        const loginModal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
        loginModal.hide();
        alert('Erro: credenciais inválidas! Tente novamente.');
    }

    // Atualiza a visibilidade dos elementos de admin após o login
    checkAdminStatus();
}

// Verificar o status de admin ao carregar a página
document.addEventListener('DOMContentLoaded', function () {
    // Tenta exibir ou esconder o ícone de administrador e os botões restritos após o DOM estar completamente carregado
    checkAdminStatus();

    // Observa o carregamento do HTML de login para chamar `checkAdminStatus`
    fetch('../../components/login.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('my-login-importacao').innerHTML = data;

            // Configura o botão de alternância de senha
            const toggleLoginPassword = document.querySelector('#toggleLoginPassword');
            const loginPassword = document.querySelector('#loginPassword');
            const loginEyeIcon = document.querySelector('#loginEyeIcon');

            if (toggleLoginPassword && loginPassword && loginEyeIcon) {
                toggleLoginPassword.addEventListener('click', function () {
                    const type = loginPassword.getAttribute('type') === 'password' ? 'text' : 'password';
                    loginPassword.setAttribute('type', type);
                    loginEyeIcon.classList.toggle('fa-eye');
                    loginEyeIcon.classList.toggle('fa-eye-slash');
                });
            }

            // Adiciona evento ao botão de login
            const loginButton = document.querySelector('.my-login-btnEntrar');
            if (loginButton) {
                loginButton.addEventListener('click', checkLogin);
            }

            // Verifica o status de admin após carregar o HTML do login
            checkAdminStatus();
        })
        .catch(error => console.error('Erro ao carregar a página:', error));
});

// Carregar o login
fetch('../../components/login.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('my-l-loginImportacao').innerHTML = data;

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

        // Função para verificar o login
        function checkLogin() {
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;

            // Verificar se o email e a senha são os de admin
            if (email === 'adm' && password === '123') {
                // Armazenar no localStorage que o usuário é admin
                localStorage.setItem('isAdmin', 'true');

                // Fechar o modal de login
                var loginModal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
                loginModal.hide();

                // Exibir o botão de admin no menu
                showAdminButton();
                alert('Login como admin bem-sucedido!');

            } else {
                // Para outros tipos de login
                localStorage.setItem('isAdmin', 'false');
                var loginModal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
                loginModal.hide();

                // Esconder o botão de admin
                hideAdminButton();
                alert('Login realizado com sucesso, mas você não tem acesso como admin.');
            }
        }

        // Função para mostrar o botão de admin no menu
        function showAdminButton() {
            const isAdmin = localStorage.getItem('isAdmin');

            if (isAdmin === 'true') {
                const adminButton = document.getElementById('adminButton');
                if (adminButton) {
                    adminButton.style.display = 'block';
                }
            }
        }

        // Função para esconder o botão de admin no menu
        function hideAdminButton() {
            const adminButton = document.getElementById('adminButton');
            if (adminButton) {
                adminButton.style.display = 'none';
            }
        }

        // Adicionar evento ao botão de login para chamar checkLogin()
        const loginButton = document.querySelector('.my-l-btnEntrar');
        if (loginButton) {
            loginButton.addEventListener('click', checkLogin);
        }

        // Verificar se o usuário já está logado como admin ao carregar a página
        document.addEventListener('DOMContentLoaded', function () {
            showAdminButton();
        });
    })
    .catch(error => console.error('Erro ao carregar a página:', error));

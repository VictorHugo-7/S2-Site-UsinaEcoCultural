// Função para verificar o status de administrador e exibir os elementos corretos
function checkAdminStatus() {
    const isAdmin = localStorage.getItem('isAdmin') === 'true';
    const authToken = localStorage.getItem('authToken'); // Verifica se o usuário está autenticado
    const admIcone = document.getElementById('admIcone');
    const logoutButton = document.getElementById('logoutButton');
    const verEventosButton = document.querySelector('.my-index-s3-btnVerEventosProximos');

    // Exibe ou oculta o ícone de administrador
    if (admIcone) {
        admIcone.style.display = isAdmin ? 'inline-block' : 'none';
    }

    // Exibe ou oculta botões com a classe `admin-only` apenas para administradores
    const adminButtons = document.querySelectorAll('.admin-only');
    adminButtons.forEach(button => {
        button.style.display = isAdmin ? 'inline-block' : 'none';
    });

    // Mostra o botão de logout para todos os usuários logados
    if (logoutButton) {
        logoutButton.style.display = authToken ? 'inline-block' : 'none';
    }
}

// Função para verificar o status de login do usuário comum
function checkUserLoginStatus() {
    const authToken = localStorage.getItem('authToken');
    const isAdmin = localStorage.getItem('isAdmin') === 'true';

    const buyButtons = document.querySelectorAll('.my-loja-s1-btnComprar');
    
    // Desabilitar botões de compra por padrão
    buyButtons.forEach(button => {
        button.disabled = true; // Desativa os botões de compra
    });

    // Habilitar botões para usuários logados (tanto admin quanto comuns)
    if (authToken) {
        buyButtons.forEach(button => {
            button.disabled = false; // Habilita os botões de compra
        });
    }
}


// Função para o login (atualizada para diferenciar usuários comuns e administradores)
async function checkLogin() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    try {
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ login: email, password: password })
        });

        if (response.ok) {
            const data = await response.json();
            const isAdmin = email === 'adm' && password === '123';

            // Armazena o token e status de admin/local
            localStorage.setItem('authToken', data.token);
            localStorage.setItem('isAdmin', isAdmin ? 'true' : 'false');

            alert(isAdmin ? 'Login como admin bem-sucedido!' : 'Login realizado com sucesso!');
            
            // Fecha o modal após o login
            const loginModal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
            loginModal.hide();

            // Atualiza a interface
            checkAdminStatus();
            checkUserLoginStatus(); // Atualiza o estado dos botões "Comprar"
        } else {
            const errorData = await response.json();
            alert(`Erro no login: ${errorData.mensagem}`);
        }
    } catch (error) {
        console.error('Erro ao fazer login:', error);
        alert('Ocorreu um erro ao tentar fazer login. Tente novamente.');
    }
}

// Função para deslogar o administrador ou usuário comum
function logout() {
    localStorage.removeItem('authToken'); // Remove o token de autenticação
    localStorage.setItem('isAdmin', 'false'); // Reseta o status de admin
    alert('Você foi deslogado com sucesso!');
    checkAdminStatus(); // Atualiza a interface
    checkUserLoginStatus(); // Atualiza o estado dos botões "Comprar"
}

// Verificar o status de admin ao carregar a página
document.addEventListener('DOMContentLoaded', function () {
    checkAdminStatus();
    checkUserLoginStatus();

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
                loginButton.addEventListener('click', async function () {
                    await checkLogin();
                    checkUserLoginStatus(); // Atualiza o status de botões "Comprar"
                });
            }

            // Adiciona evento ao botão de logout
            const logoutButton = document.getElementById('logoutButton');
            if (logoutButton) {
                logoutButton.addEventListener('click', function () {
                    logout();
                    checkUserLoginStatus(); // Atualiza o status de botões "Comprar"
                });
            }

            // Verifica o status de admin após carregar o HTML do login
            checkAdminStatus();
            checkUserLoginStatus();
        })
        .catch(error => console.error('Erro ao carregar a página:', error));
});

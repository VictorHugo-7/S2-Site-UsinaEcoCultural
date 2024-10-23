// Carregar o cadastro
fetch('../../components/cadastro.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('my-c-cadastroImportacao').innerHTML = data;

        // Função para o cadastro (mostrar/ocultar senha)
        const toggleRegisterPassword = document.querySelector('#toggleRegisterPassword');
        const registerPassword = document.querySelector('#registerPassword');
        const registerEyeIcon = document.querySelector('#registerEyeIcon');

        toggleRegisterPassword.addEventListener('click', function () {
            const type = registerPassword.getAttribute('type') === 'password' ? 'text' : 'password';
            registerPassword.setAttribute('type', type);
            registerEyeIcon.classList.toggle('fa-eye');
            registerEyeIcon.classList.toggle('fa-eye-slash');
        });

        // Função para o cadastro (mostrar/ocultar confirmar senha)
        const toggleRegisterConfirmPassword = document.querySelector('#toggleRegisterConfirmPassword');
        const registerConfirmPassword = document.querySelector('#registerConfirmPassword');
        const registerConfirmEyeIcon = document.querySelector('#registerConfirmEyeIcon');

        toggleRegisterConfirmPassword.addEventListener('click', function () {
            const type = registerConfirmPassword.getAttribute('type') === 'password' ? 'text' : 'password';
            registerConfirmPassword.setAttribute('type', type);
            registerConfirmEyeIcon.classList.toggle('fa-eye');
            registerConfirmEyeIcon.classList.toggle('fa-eye-slash');
        });
    })
    .catch(error => console.error('Erro ao carregar a página:', error));


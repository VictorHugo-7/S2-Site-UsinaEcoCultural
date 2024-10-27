// Carregar o cadastro
fetch('../../components/cadastro.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('my-cadastro-importacao').innerHTML = data;

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

        // Função para ativar/desativar o botão "CADASTRAR" com base no checkbox de termos
        const termsCheckbox = document.querySelector('#termsCheckbox');
        const registerButton = document.querySelector('#registerButton');

        // Define o estado inicial do botão como desabilitado
        registerButton.classList.add('disabled');

        termsCheckbox.addEventListener('change', function () {
            if (this.checked) {
                registerButton.disabled = false;
                registerButton.classList.remove('disabled'); // Remove a classe disabled
                registerButton.classList.add('enabled'); // Adiciona a classe enabled
            } else {
                registerButton.disabled = true;
                registerButton.classList.add('disabled'); // Adiciona a classe disabled
                registerButton.classList.remove('enabled'); // Remove a classe enabled
            }
        });
    })
    .catch(error => console.error('Erro ao carregar a página:', error));

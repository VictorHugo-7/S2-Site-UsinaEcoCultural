// Carregar o cadastro
fetch('../../components/cadastro.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('my-cadastro-importacao').innerHTML = data;

        // Função para o cadastro (mostrar/ocultar senha)
        const toggleRegisterPassword = document.querySelector('#toggleRegisterPassword');
        const passwordCadastroInput = document.querySelector('#passwordCadastroInput');
        const registerEyeIcon = document.querySelector('#registerEyeIcon');

        toggleRegisterPassword.addEventListener('click', function () {
            const type = passwordCadastroInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordCadastroInput.setAttribute('type', type);
            registerEyeIcon.classList.toggle('fa-eye');
            registerEyeIcon.classList.toggle('fa-eye-slash');
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

        // Adicionar evento de clique ao botão "CADASTRAR"
        registerButton.addEventListener('click', cadastrarUsuario);

        // Função assíncrona que cadastra um novo usuário no backend
        async function cadastrarUsuario() {
            const usuarioCadastroInput = document.querySelector('#usuarioCadastroInput');
            const passwordCadastroInput = document.querySelector('#passwordCadastroInput');
            const usuarioCadastro = usuarioCadastroInput.value;
            const passwordCadastro = passwordCadastroInput.value;

            if (usuarioCadastro && passwordCadastro) { // Verifica se os campos não estão vazios
                try {
                    const baseURL = 'http://localhost:3000'; // URL base do backend
                    const cadastroEndpoint = '/signup'; // Define o endpoint de cadastro
                    const URLCompleta = baseURL + cadastroEndpoint; // Constrói a URL completa

                    await axios.post(URLCompleta, { login: usuarioCadastro, password: passwordCadastro }); // Faz a requisição POST

                    usuarioCadastroInput.value = ""; // Limpa os campos de entrada
                    passwordCadastroInput.value = "";

                    // Exibe uma mensagem de sucesso ao usuário
                    alert("Usuário cadastrado com sucesso!");
                } catch (error) {
                    console.error("Erro ao cadastrar usuário:", error);
                    // Exibe uma mensagem de erro
                    alert("Erro ao cadastrar usuário. Verifique as informações e tente novamente.");
                }
            } else {
                // Exibe uma mensagem caso os campos não estejam preenchidos
                alert("Preencha todos os campos antes de cadastrar.");
            }
        }
    })
    .catch(error => console.error('Erro ao carregar a página:', error));

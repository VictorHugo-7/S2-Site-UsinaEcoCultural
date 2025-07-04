// Função para buscar usuários do backend
async function carregarUsuarios() {
    try {
        const baseURL = 'http://localhost:3000';
        const response = await axios.get(`${baseURL}/users`);
        const usuarios = response.data;

        const tabela = document.getElementById('usuariosTabela');
        tabela.innerHTML = ''; // Limpa o conteúdo da tabela

        // Preenche a tabela com os logins dos usuários
        usuarios.forEach(usuario => {
            const linha = document.createElement('tr');

            const colunaLogin = document.createElement('td');
            colunaLogin.textContent = usuario.login;

            linha.appendChild(colunaLogin);
            tabela.appendChild(linha);
        });
    } catch (error) {
        console.error('Erro ao carregar usuários:', error);
        alert('Erro ao carregar a lista de usuários.');
    }
}

// Carrega o HTML e garante que a tabela esteja pronta antes de carregar os usuários
fetch('../../../html/pages/usuarios/section1.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('my-usuarios-s1-importacao').innerHTML = data;

        // Agora que o HTML foi carregado, chamamos a função
        carregarUsuarios();
    })
    .catch(error => console.error('Erro ao carregar a página:', error));

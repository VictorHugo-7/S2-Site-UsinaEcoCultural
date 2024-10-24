// Carregar recuperar senha
fetch('../../components/recuperarSenha.html')
.then(response => response.text())
.then(data => {
    document.getElementById('my-recuperarSenha-importacao').innerHTML = data;



    
})
.catch(error => console.error('Erro ao carregar a página:', error));
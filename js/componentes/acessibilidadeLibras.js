fetch('../../components/acessibilidadeLibras.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('my-acessibilidadeLibras-importacao').innerHTML = data;

    })
    .catch(error => console.error('Erro ao carregar a página:', error));
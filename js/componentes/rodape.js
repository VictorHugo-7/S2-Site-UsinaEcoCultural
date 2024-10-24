fetch('../../components/rodape.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('my-rodape-importacao').innerHTML = data;


    })
    .catch(error => console.error('Erro ao carregar a página:', error));
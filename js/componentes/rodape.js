// Carregar o rodape
fetch('../../components/rodape.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('my-r-rodape').innerHTML = data;


    })
    .catch(error => console.error('Erro ao carregar a página:', error));
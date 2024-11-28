function openEditModalEventoPróximos() {
    const editModalEventoPróximos = new bootstrap.Modal(document.getElementById('editModalEventosProximos'));
    editModalEventoPróximos.show();
}

// Certifique-se de que a seção HTML foi carregada antes de adicionar o listener
fetch('../../../html/pages/index/section3.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('my-index-s3-importacao').innerHTML = data;

        // Função para carregar dados salvos do Local Storage
        function carregarDadosDosCards() {
            const cardsData = JSON.parse(localStorage.getItem('eventosProximos')) || [];
            const cards = document.querySelectorAll('.my-index-s3-cardAlteracao');

            // Atualiza os cards com os dados armazenados
            cards.forEach((card, index) => {
                if (cardsData[index]) {
                    const dataFormatada = formatarDataExibicao(cardsData[index].date); // Formatação da data
                    card.querySelector('.my-index-s3-imagem').src = cardsData[index].imageUrl;
                    card.querySelector('.card-title').innerText = cardsData[index].title;
                    card.querySelector('.card-date').innerText = dataFormatada;
                    card.querySelector('.card-time').innerText = cardsData[index].time;
                    card.querySelector('.card-location').innerText = cardsData[index].location;
                    card.querySelector('.card-price').innerText = "R$ " + cardsData[index].price;
                    card.querySelector('.card-text').innerText = cardsData[index].description;
                    card.querySelector('.my-index-s3-btnVerEventosProximos').setAttribute('onclick', `window.open('${cardsData[index].url}', '_blank')`);
                }
            });
        }

        // Função para formatar a data para exibição
        function formatarDataExibicao(dataISO) {
            const data = new Date(dataISO);
            const dia = String(data.getDate()).padStart(2, '0');
            const mes = String(data.getMonth() + 1).padStart(2, '0');
            const ano = data.getFullYear();
            return `${dia}/${mes}/${ano}`;
        }

        // Carrega os dados dos cards na inicialização
        carregarDadosDosCards();

        // Adiciona o event listener para o botão de salvar
        document.getElementById('saveChangesBtnEventosProximos').addEventListener('click', function () {
            const index = parseInt(document.getElementById('editIndexEventosProximos').value) - 1;
            const cards = document.querySelectorAll('.my-index-s3-cardAlteracao');

            if (index >= 0 && index < cards.length) {
                const selectedCard = cards[index];

                // Pega os valores do modal
                const imageUrl = document.getElementById('editImageUrlEventosProximos').value;
                const title = document.getElementById('editTitleEventosProximos').value;
                const date = document.getElementById('editDateEventosProximos').value;
                const time = document.getElementById('editTimeEventosProximos').value;
                const location = document.getElementById('editLocationEventosProximos').value;
                const price = document.getElementById('editPriceEventosProximos').value;
                const description = document.getElementById('editDescriptionEventosProximos').value;
                const url = document.getElementById('editUrlEventosProximos').value;

                // Validação dos campos
                if (!imageUrl || !title || !date || !time || !location || !price || !description || !url) {
                    alert('Por favor, preencha todos os campos antes de salvar.');
                    return;
                }

                // Atualiza os elementos do card
                const dataFormatada = formatarDataExibicao(date);
                selectedCard.querySelector('.my-index-s3-imagem').src = imageUrl;
                selectedCard.querySelector('.card-title').innerText = title;
                selectedCard.querySelector('.card-date').innerText = dataFormatada;
                selectedCard.querySelector('.card-time').innerText = time;
                selectedCard.querySelector('.card-location').innerText = location;
                selectedCard.querySelector('.card-price').innerText = "R$ " + price;
                selectedCard.querySelector('.card-text').innerText = description;
                selectedCard.querySelector('.my-index-s3-btnVerEventosProximos').setAttribute('onclick', `window.open('${url}', '_blank')`);

                // Salva os dados no Local Storage
                const cardsData = JSON.parse(localStorage.getItem('eventosProximos')) || [];
                cardsData[index] = { imageUrl, title, date, time, location, price, description, url };
                localStorage.setItem('eventosProximos', JSON.stringify(cardsData));

                // Fecha o modal
                const editModalInstance = bootstrap.Modal.getInstance(document.getElementById('editModalEventosProximos'));
                if (editModalInstance) {
                    editModalInstance.hide();
                }

                alert('Alterações salvas com sucesso!');
            } else {
                alert('Índice inválido. Por favor, escolha um índice de card válido.');
            }
        });
    })
    .catch(error => console.error('Erro ao carregar a página:', error));

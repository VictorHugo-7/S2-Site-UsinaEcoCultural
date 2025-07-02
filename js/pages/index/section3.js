function openEditModalEventoPróximos() {
    const editModalEventoPróximos = new bootstrap.Modal(document.getElementById('editModalEventosProximos'));
    editModalEventoPróximos.show();
}

// Certifique-se de que a seção HTML foi carregada antes de adicionar o listener
fetch('../../../html/pages/index/section3.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('my-index-s3-importacao').innerHTML = data;

        // Função para formatar a data para exibição
        function formatarDataExibicao(dataISO) {
            const data = new Date(dataISO);
            const dia = String(data.getDate()).padStart(2, '0');
            const mes = String(data.getMonth() + 1).padStart(2, '0');
            const ano = data.getFullYear();
            return `${dia}/${mes}/${ano}`;
        }

        // Adiciona o event listener para o botão de salvar
        document.getElementById('saveChangesBtnEventosProximos').addEventListener('click', function () {
            const index = parseInt(document.getElementById('editIndexEventosProximos').value) - 1;
            const cards = document.querySelectorAll('.my-index-s3-cardAlteracao');

            if (index >= 0 && index < cards.length) {
                const selectedCard = cards[index];

                // Pega o arquivo do input file
                const fileInput = document.getElementById('uploadImageEventosProximos');
                const file = fileInput.files[0];

                // Pega os outros valores do modal
                const title = document.getElementById('editTitleEventosProximos').value;
                const date = document.getElementById('editDateEventosProximos').value;
                const time = document.getElementById('editTimeEventosProximos').value;
                const location = document.getElementById('editLocationEventosProximos').value;
                const price = document.getElementById('editPriceEventosProximos').value;
                const description = document.getElementById('editDescriptionEventosProximos').value;
                const url = document.getElementById('editUrlEventosProximos').value;

                // Validação dos campos
                if (!file || !title || !date || !time || !location || !price || !description || !url) {
                    alert('Por favor, preencha todos os campos e selecione uma imagem antes de salvar.');
                    return;
                }

                // Função para aplicar alterações após leitura da imagem
                const salvarComImagem = (imageDataUrl) => {
                    const dataFormatada = formatarDataExibicao(date);
                    selectedCard.querySelector('.my-index-s3-imagem').src = imageDataUrl;
                    selectedCard.querySelector('.card-title').innerText = title;
                    selectedCard.querySelector('.card-date').innerText = dataFormatada;
                    selectedCard.querySelector('.card-time').innerText = time;
                    selectedCard.querySelector('.card-location').innerText = location;
                    selectedCard.querySelector('.card-price').innerText = "R$ " + price;
                    selectedCard.querySelector('.card-text').innerText = description;
                    selectedCard.querySelector('.my-index-s3-btnVerEventosProximos').setAttribute('onclick', `window.open('${url}', '_blank')`);

                    // Fecha o modal
                    const editModalInstance = bootstrap.Modal.getInstance(document.getElementById('editModalEventosProximos'));
                    if (editModalInstance) {
                        editModalInstance.hide();
                    }

                    alert('Alterações salvas com sucesso!');
                };

                // Lê o arquivo da imagem
                const reader = new FileReader();
                reader.onload = function (e) {
                    salvarComImagem(e.target.result);
                };
                reader.readAsDataURL(file);

            } else {
                alert('Índice inválido. Por favor, escolha um índice de card válido.');
            }
        });

    })
    .catch(error => console.error('Erro ao carregar a página:', error));

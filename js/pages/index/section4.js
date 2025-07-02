function openEditModalNoticiasAtuais() {
    const editModalNoticiasAtuais = new bootstrap.Modal(document.getElementById('editModalNoticiasAtuais'));
    editModalNoticiasAtuais.show();
}

fetch('../../../html/pages/index/section4.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('my-index-s4-importacao').innerHTML = data;

        function formatarDataExibicao(dataISO) {
            const data = new Date(dataISO);
            const dia = String(data.getDate()).padStart(2, '0');
            const mes = String(data.getMonth() + 1).padStart(2, '0');
            const ano = data.getFullYear();
            return `${dia}/${mes}/${ano}`;
        }

        document.getElementById('saveChangesBtnNoticiasAtuais').addEventListener('click', function () {
            const index = parseInt(document.getElementById('editIndexNoticiasAtuais').value) - 1;
            const cards = document.querySelectorAll('.my-index-s4-cardAlteracao');

            if (index >= 0 && index < cards.length) {
                const selectedCard = cards[index];

                const fileInput = document.getElementById('uploadImageNoticiasAtuais');
                const file = fileInput.files[0];

                const title = document.getElementById('editTitleNoticiasAtuais').value;
                const date = document.getElementById('editDateNoticiasAtuais').value;
                const time = document.getElementById('editTimeNoticiasAtuais').value;
                const description = document.getElementById('editDescriptionNoticiasAtuais').value;
                const url = document.getElementById('editUrlNoticiasAtuais').value;

                if (!file || !title || !date || !time || !description || !url) {
                    alert('Por favor, preencha todos os campos e selecione uma imagem antes de salvar.');
                    return;
                }

                const salvarComImagem = (imageDataUrl) => {
                    const dataFormatada = formatarDataExibicao(date);
                    selectedCard.querySelector('.my-index-s4-imagem').src = imageDataUrl;
                    selectedCard.querySelector('.card-title').innerText = title;
                    selectedCard.querySelector('.card-date').innerText = dataFormatada;
                    selectedCard.querySelector('.card-time').innerText = time;
                    selectedCard.querySelector('.card-text').innerText = description;
                    selectedCard.querySelector('.my-index-s4-btnVerNoticiasAtuais').setAttribute('onclick', `window.open('${url}', '_blank')`);

                    const editModalInstance = bootstrap.Modal.getInstance(document.getElementById('editModalNoticiasAtuais'));
                    if (editModalInstance) {
                        editModalInstance.hide();
                    }

                    alert('Alterações salvas com sucesso!');
                };

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

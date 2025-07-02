let cardCount = 1;

// MODAL - Pix
function openPixModal() {
    const pixModal = new bootstrap.Modal(document.getElementById('pixModal'));
    pixModal.show();
}

// CARD - adicionar
function addCard(cardInfo = null) {
    const cardContainer = document.getElementById('cards-container');
    const newCard = document.createElement('div');
    newCard.classList.add('col-12', 'col-md-6', 'col-lg-3', 'mb-4', 'card-wrapper');

    newCard.innerHTML = `
        <div class="card" style="height: 100%;">
            <img src="${cardInfo ? cardInfo.image : '../../../midias/img/global/imagem.svg'}"
                class="my-loja-s1-imagem card-image" alt="Imagem da loja">
            <div class="card-body">
                <h5 class="card-title">${cardInfo ? cardInfo.title : 'Título'}</h5>
                <h6 class="card-subtitle mb-2 text-muted card-price">${cardInfo ? cardInfo.price : 'Preço'}</h6>
                <p class="card-text text-muted card-description">${cardInfo ? cardInfo.description : 'Descrição'}</p>
            </div>
            <div class="card-footer d-flex justify-content-between align-items-center">
                <span class="my-loja-s1-index admin-only">${cardCount}</span>
                <button class="my-loja-s1-btnComprar" onclick="openPixModal()">Comprar</button>
            </div>
        </div>
    `;
    cardContainer.appendChild(newCard);
    cardCount++;
    updateCardIndices();
}

// CARD - atualizar índices
function updateCardIndices() {
    const cards = document.querySelectorAll('.card-wrapper');
    cards.forEach((card, index) => {
        card.querySelector('.my-loja-s1-index').textContent = index + 1;
    });
}

// MODAL - Excluir
function openDeleteModal() {
    const deleteModal = new bootstrap.Modal(document.getElementById('deleteModal'));
    deleteModal.show();
}

// CARD - Excluir
function deleteCard() {
    const indexToDelete = parseInt(document.getElementById('deleteIndex').value, 10) - 1;
    const cards = document.querySelectorAll('.card-wrapper');

    if (indexToDelete >= 0 && indexToDelete < cards.length) {
        cards[indexToDelete].remove();
        cardCount--;
        updateCardIndices();

        const deleteModal = bootstrap.Modal.getInstance(document.getElementById('deleteModal'));
        deleteModal.hide();
    } else {
        alert('Índice inválido. Por favor, escolha um índice de card válido.');
    }
}

// MODAL - Edição
function openEditModal() {
    const editModal = new bootstrap.Modal(document.getElementById('editModal'));
    editModal.show();
}

fetch('../../../html/pages/loja/section1.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('my-loja-s1-importacao').innerHTML = data;

        document.getElementById('pixForm').addEventListener('submit', function (event) {
            event.preventDefault();

            const loadingOverlay = document.getElementById('my-loja-s1-loadingOverlay');
            loadingOverlay.classList.add('active');

            const formData = new FormData(this);

            fetch('https://formsubmit.co/cururu995@gmail.com', {
                method: 'POST',
                body: formData,
            })
                .then(response => {
                    loadingOverlay.classList.remove('active');

                    if (response.ok) {
                        alert('Comprovante enviado com sucesso!');
                        this.reset();
                        const pixModal = bootstrap.Modal.getInstance(document.getElementById('pixModal'));
                        pixModal.hide();
                    } else {
                        alert('Houve um problema ao enviar seu comprovante.');
                    }
                })
                .catch(error => {
                    console.error('Erro ao enviar o formulário:', error);
                    alert('Erro ao enviar o comprovante.');
                })
                .finally(() => {
                    loadingOverlay.classList.remove('active');
                });
        });

        document.getElementById('saveChangesBtn').addEventListener('click', function () {
            const index = document.getElementById('editIndex').value - 1;
            const cards = document.querySelectorAll('.card-wrapper');

            if (index >= 0 && index < cards.length) {
                const selectedCard = cards[index];

                const fileInput = document.getElementById('editImage');
                const file = fileInput.files[0];

                const title = document.getElementById('editTitle').value;
                const price = document.getElementById('editPrice').value;
                const description = document.getElementById('editDescription').value;

                const aplicarAlteracoes = (imageDataUrl) => {
                    if (imageDataUrl) {
                        selectedCard.querySelector('.card-image').src = imageDataUrl;
                    }
                    selectedCard.querySelector('.card-title').innerText = title;
                    selectedCard.querySelector('.card-price').innerText = "R$ " + price;
                    selectedCard.querySelector('.card-description').innerText = description;

                    const editModal = bootstrap.Modal.getInstance(document.getElementById('editModal'));
                    editModal.hide();
                };

                if (file) {
                    const reader = new FileReader();
                    reader.onload = function (e) {
                        aplicarAlteracoes(e.target.result);
                    };
                    reader.readAsDataURL(file);
                } else {
                    aplicarAlteracoes(null);
                }

            } else {
                alert('Índice inválido. Por favor, escolha um índice de card válido.');
            }
        });

        // Controle do botão de envio conforme aceite dos Termos e Política
        const termsCheckboxLoja = document.querySelector('#termsCheckboxLoja');
        const enviarComprovanteButton = document.querySelector('.my-loja-s1-btnEnviarComprovante');

        enviarComprovanteButton.disabled = true;

        termsCheckboxLoja.addEventListener('change', function () {
            enviarComprovanteButton.disabled = !this.checked;
            enviarComprovanteButton.classList.toggle('enabled', this.checked);
            enviarComprovanteButton.classList.toggle('disabled', !this.checked);
        });
    })
    .catch(error => console.error('Erro ao carregar a página:', error));

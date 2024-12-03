let cardCount = localStorage.getItem('cardCount') ? parseInt(localStorage.getItem('cardCount')) : 1;

// MODAL - Pix
function openPixModal() {
    const pixModal = new bootstrap.Modal(document.getElementById('pixModal'));
    pixModal.show();
}

// Function to save cards to local storage
function saveCardsToLocalStorage() {
    const cards = document.querySelectorAll('.card-wrapper');
    const cardData = Array.from(cards).map(card => {
        return {
            image: card.querySelector('.card-image').src,
            title: card.querySelector('.card-title').textContent,
            price: card.querySelector('.card-price').textContent,
            description: card.querySelector('.card-description').textContent
        };
    });
    localStorage.setItem('storeCards', JSON.stringify(cardData));
    localStorage.setItem('cardCount', cardCount);
}

// Function to load cards from local storage
function loadCardsFromLocalStorage() {
    const savedCards = localStorage.getItem('storeCards');
    if (savedCards) {
        const cardContainer = document.getElementById('cards-container');
        cardContainer.innerHTML = ''; // Clear existing cards

        const cardData = JSON.parse(savedCards);
        cardData.forEach(card => {
            addCard(card);
        });
    }
}

// CARD - adicionar
function addCard(cardInfo = null) {
    const cardContainer = document.getElementById('cards-container');
    const newCard = document.createElement('div');
    newCard.classList.add('col-12', 'col-md-6', 'col-lg-3', 'mb-4', 'card-wrapper');

    // Card HTML com o índice correto atualizado
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
                <span class="my-loja-s1-index admin-only">1</span>
                <button class="my-loja-s1-btnComprar" onclick="openPixModal()">Comprar</button>
            </div>
        </div>
    `;
    cardContainer.appendChild(newCard);
    cardCount++; // Incrementa o contador de cards
    updateCardIndices(); // Atualiza todos os índices após a adição
    saveCardsToLocalStorage(); // Salva os cards no local storage
}

// CARD - atualizar índices
function updateCardIndices() {
    const cards = document.querySelectorAll('.card-wrapper'); // Seleciona todos os cards
    cards.forEach((card, index) => {
        card.querySelector('.my-loja-s1-index').textContent = index + 1;
    });
}

// M0DAL - Excluir
function openDeleteModal() {
    const deleteModal = new bootstrap.Modal(document.getElementById('deleteModal'));
    deleteModal.show();
}

// CARD - Excluir
function deleteCard() {
    const indexToDelete = parseInt(document.getElementById('deleteIndex').value, 10) - 1;
    const cards = document.querySelectorAll('.card-wrapper');

    if (indexToDelete >= 0 && indexToDelete < cards.length) {
        // Remove o card selecionado
        cards[indexToDelete].remove();

        // Decrementa o contador de cards para manter a contagem correta
        cardCount--;

        // Atualiza os índices visíveis dos cards
        updateCardIndices();

        // Salva as alterações no local storage
        saveCardsToLocalStorage();

        // Fecha o modal de exclusão
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

        // Adicionar o manipulador de envio do formulário para o formulário pixForm
        document.getElementById('pixForm').addEventListener('submit', function (event) {
            event.preventDefault(); // Impede o comportamento padrão do formulário

            // Mostrar o overlay de carregamento
            const loadingOverlay = document.getElementById('my-loja-s1-loadingOverlay');
            loadingOverlay.classList.add('active');

            const formData = new FormData(this);

            fetch('https://formsubmit.co/cururu995@gmail.com', {
                method: 'POST',
                body: formData,
            })
                .then(response => {
                    // Ocultar o overlay de carregamento ao receber a resposta
                    loadingOverlay.classList.remove('active');

                    if (response.ok) {
                        alert('Comprovante enviado com sucesso!');
                        this.reset(); // Limpa o formulário

                        // Fecha o modal após envio bem-sucedido
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
                    // Sempre ocultar o overlay ao final do processamento
                    loadingOverlay.classList.remove('active');
                });
        });

        // Adiciona o evento de salvar alterações no card
        document.getElementById('saveChangesBtn').addEventListener('click', function () {
            const index = document.getElementById('editIndex').value - 1; // Índice baseado em 1
            const cards = document.querySelectorAll('.card-wrapper');

            if (index >= 0 && index < cards.length) {
                const selectedCard = cards[index];

                // Atualiza a imagem, título, preço e descrição do card
                const imageUrl = document.getElementById('editImage').value;
                if (imageUrl) {
                    selectedCard.querySelector('.card-image').src = imageUrl;
                }
                selectedCard.querySelector('.card-title').innerText = document.getElementById('editTitle').value;
                selectedCard.querySelector('.card-price').innerText = "R$ " + document.getElementById('editPrice').value;
                selectedCard.querySelector('.card-description').innerText = document.getElementById('editDescription').value;

                // Salva as alterações no local storage
                saveCardsToLocalStorage();

                // Fecha o modal
                const editModal = bootstrap.Modal.getInstance(document.getElementById('editModal'));
                editModal.hide();
            } else {
                alert('Índice inválido. Por favor, escolha um índice de card válido.');
            }
        });

        // Controle do botão de envio conforme aceite dos Termos e Política
        const termsCheckboxLoja = document.querySelector('#termsCheckboxLoja');
        const enviarComprovanteButton = document.querySelector('.my-loja-s1-btnEnviarComprovante');

        // Inicializa o botão como desabilitado
        enviarComprovanteButton.disabled = true;

        termsCheckboxLoja.addEventListener('change', function () {
            enviarComprovanteButton.disabled = !this.checked;
            enviarComprovanteButton.classList.toggle('enabled', this.checked);
            enviarComprovanteButton.classList.toggle('disabled', !this.checked);
        });

        // Carrega os cards do local storage quando a página carregar
        loadCardsFromLocalStorage();
    })
    .catch(error => console.error('Erro ao carregar a página:', error));
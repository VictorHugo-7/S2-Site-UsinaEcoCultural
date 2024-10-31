// Variáveis globais
let cardCount = 1;

// Função para adicionar um novo card
function addCard() {
    cardCount++;
    const cardContainer = document.getElementById('cards-container');
    const newCard = document.createElement('div');
    newCard.classList.add('col-12', 'col-md-6', 'col-lg-3', 'mb-4', 'card-wrapper');
    newCard.innerHTML = `
        <div class="card">
            <img src="../../../media/img/global/imagem.svg" class="card-image" alt="Imagem do evento">
            <div class="card-body">
                <h5 class="card-title">Título</h5>
                <h6 class="card-subtitle mb-2"><span class="card-date">Dia</span> | <span class="card-time">Horário</span></h6>
                <h6 class="card-subtitle mb-2 text-muted card-location">Local</h6>
                <h6 class="card-subtitle mb-2 text-muted card-price">Preço</h6>
                <p class="card-text text-muted card-description">Descrição</p>
            </div>
            <div class="card-footer d-flex justify-content-between align-items-center">
                <span class="index-badge">${cardCount}</span>
                <button class="my-divulgacaoEventos-s3-btnVerEvento">Ver Evento</button>
            </div>
        </div>
    `;
    cardContainer.appendChild(newCard);
}

// Função para abrir o modal de exclusão
function openDeleteModal() {
    const deleteModal = new bootstrap.Modal(document.getElementById('deleteModal'));
    deleteModal.show();
}

// Função para excluir um card específico pelo índice
function deleteCard() {
    const indexToDelete = document.getElementById('deleteIndex').value - 1;
    const cards = document.querySelectorAll('.card-wrapper');

    if (indexToDelete >= 0 && indexToDelete < cards.length) {
        cards[indexToDelete].remove();
        updateCardIndices();
        cardCount--;
        const deleteModal = bootstrap.Modal.getInstance(document.getElementById('deleteModal'));
        deleteModal.hide();
    } else {
        alert('Índice inválido. Por favor, escolha um índice de card válido.');
    }
}

// Atualiza os índices visíveis nos cards após uma exclusão
function updateCardIndices() {
    const cards = document.querySelectorAll('.index-badge');
    cards.forEach((badge, index) => {
        badge.textContent = index + 1;
    });
}

// Função para abrir o modal de edição
function openEditModal() {
    const editModal = new bootstrap.Modal(document.getElementById('editModal'));
    editModal.show();
}

// Salva as alterações feitas no modal de edição
function saveChanges() {
    const index = document.getElementById('editIndex').value - 1;
    const cards = document.querySelectorAll('.card');

    if (index >= 0 && index < cards.length) {
        const selectedCard = cards[index];

        const imageInput = document.getElementById('editImage');
        if (imageInput.files && imageInput.files[0]) {
            const reader = new FileReader();
            reader.onload = function (e) {
                selectedCard.querySelector('.card-image').src = e.target.result;
            };
            reader.readAsDataURL(imageInput.files[0]);
        }

        selectedCard.querySelector('.card-title').innerText = document.getElementById('editTitle').value;
        selectedCard.querySelector('.card-date').innerText = document.getElementById('editDate').value;
        selectedCard.querySelector('.card-time').innerText = document.getElementById('editTime').value;
        selectedCard.querySelector('.card-location').innerText = document.getElementById('editLocation').value;
        selectedCard.querySelector('.card-price').innerText = "R$ " + document.getElementById('editPrice').value;
        selectedCard.querySelector('.card-text').innerText = document.getElementById('editDescription').value;

        selectedCard.querySelector('.btn-primary').setAttribute('onclick', `window.open('${document.getElementById('editUrl').value}', '_blank')`);

        const editModal = bootstrap.Modal.getInstance(document.getElementById('editModal'));
        editModal.hide();
    } else {
        alert('Índice inválido. Por favor, escolha um índice de card válido.');
    }
}

// Função para organizar os cards por dia e horário
function sortCards() {
    const cardsContainer = document.getElementById('cards-container');
    const cardsArray = Array.from(cardsContainer.children);

    cardsArray.sort((a, b) => {
        const dateA = parseDateTime(a.querySelector('.card-date').innerText, a.querySelector('.card-time').innerText);
        const dateB = parseDateTime(b.querySelector('.card-date').innerText, b.querySelector('.card-time').innerText);
        return dateA - dateB;
    });

    cardsContainer.innerHTML = '';
    cardsArray.forEach((card, index) => {
        card.querySelector('.index-badge').textContent = index + 1;
        cardsContainer.appendChild(card);
    });
}

// Função para converter DD/MM/AAAA e HH:MM em objeto Date
function parseDateTime(dateStr, timeStr) {
    const [day, month, year] = dateStr.split('/').map(Number);
    const [hours, minutes] = timeStr.split(':').map(Number);
    return new Date(year, month - 1, day, hours, minutes);
}


// Carrega o conteúdo HTML e inicializa o código ao carregar a página
fetch('../../../html/pages/divulgacao_eventos/section1.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('my-divulgacao_eventos-s1-importacao').innerHTML = data;

        document.getElementById('saveChangesBtn').addEventListener('click', saveChanges);
    })
    .catch(error => console.error('Erro ao carregar a página:', error));

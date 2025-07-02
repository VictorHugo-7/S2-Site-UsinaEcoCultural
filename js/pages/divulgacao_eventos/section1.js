let cardCount = 1;

// Formatar a data para "dd/mm/yyyy"
function formatDate(dateStr) {
    const [year, month, day] = dateStr.split('-');
    return `${day}/${month}/${year}`;
}

// CARD - adicionar
function addCard(eventInfo = null) {
    const cardContainer = document.getElementById('cards-container');
    const newCard = document.createElement('div');
    newCard.classList.add('col-12', 'col-md-6', 'col-lg-3', 'mb-4', 'card-wrapper');

    newCard.innerHTML = `
        <div class="card" style="height: 100%;">
            <img src="${eventInfo ? eventInfo.imageUrl : '../../../midias/img/global/imagem.svg'}"
                class="my-divulgacao_eventos-s1-imagem card-image" alt="Imagem do evento">
            <div class="card-body">
                <h5 class="card-title">${eventInfo ? eventInfo.title : 'Título'}</h5>
                <h6 class="card-subtitle mb-2">
                    <span class="card-date">${eventInfo ? eventInfo.date : 'Dia'}</span> | 
                    <span class="card-time">${eventInfo ? eventInfo.time : 'Horário'}</span>
                </h6>
                <h6 class="card-subtitle mb-2 text-muted card-location">
                    ${eventInfo ? eventInfo.location : 'Local'}
                </h6>
                <h6 class="card-subtitle mb-2 text-muted card-price">
                    ${eventInfo ? eventInfo.price : 'Preço'}
                </h6>
                <p class="card-text text-muted card-description">
                    ${eventInfo ? eventInfo.description : 'Descrição'}
                </p>
            </div>
            <div class="card-footer d-flex justify-content-between align-items-center">
                <span class="my-divulgacao_eventos-s1-index admin-only">${cardCount}</span>
                <button class="my-divulgacao_eventos-s1-btnVerEventos"
                    onclick="window.open('${eventInfo ? eventInfo.url : 'https://www.exemplo3.com'}', '_blank')">Ver Evento</button>
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
        card.querySelector('.my-divulgacao_eventos-s1-index').textContent = index + 1;
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

// CARD - Ordenar por data
function sortCardsByDate() {
    const cardsContainer = document.getElementById('cards-container');
    const cards = Array.from(cardsContainer.getElementsByClassName('card-wrapper'));

    cards.sort((a, b) => {
        const dateA = new Date(a.querySelector('.card-date').textContent.split('/').reverse().join('-'));
        const dateB = new Date(b.querySelector('.card-date').textContent.split('/').reverse().join('-'));
        return dateA - dateB;
    });

    cardsContainer.innerHTML = '';
    cards.forEach(card => cardsContainer.appendChild(card));
    updateCardIndices();
}

// Fetch da seção HTML e inicialização
fetch('../../../html/pages/divulgacao_eventos/section1.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('my-divulgacao_eventos-s1-importacao').innerHTML = data;

        document.getElementById('saveChangesBtn').addEventListener('click', function () {
            const index = document.getElementById('editIndex').value - 1;
            const cards = document.querySelectorAll('.card-wrapper');

            if (index >= 0 && index < cards.length) {
                const selectedCard = cards[index];

                const fileInput = document.getElementById('editImage');
                const file = fileInput.files[0];

                const title = document.getElementById('editTitle').value;
                const location = document.getElementById('editLocation').value;
                const price = document.getElementById('editPrice').value;
                const description = document.getElementById('editDescription').value;
                const dateInput = document.getElementById('editDate').value;
                const timeInput = document.getElementById('editTime').value;
                const eventUrl = document.getElementById('editUrl').value;

                const updateCardFields = (imageDataUrl) => {
                    if (imageDataUrl) {
                        selectedCard.querySelector('.card-image').src = imageDataUrl;
                    }

                    selectedCard.querySelector('.card-title').innerText = title;
                    selectedCard.querySelector('.card-location').innerText = location;
                    selectedCard.querySelector('.card-price').innerText = "R$ " + price;
                    selectedCard.querySelector('.card-description').innerText = description;

                    if (dateInput && timeInput) {
                        const formattedDate = formatDate(dateInput);
                        selectedCard.querySelector('.card-date').innerText = formattedDate;
                        selectedCard.querySelector('.card-time').innerText = timeInput;
                    }

                    selectedCard.querySelector('.my-divulgacao_eventos-s1-btnVerEventos')
                        .setAttribute('onclick', `window.open('${eventUrl}', '_blank')`);

                    const editModal = bootstrap.Modal.getInstance(document.getElementById('editModal'));
                    editModal.hide();
                };

                if (file) {
                    const reader = new FileReader();
                    reader.onload = function (e) {
                        updateCardFields(e.target.result);
                    };
                    reader.readAsDataURL(file);
                } else {
                    updateCardFields();
                }

            } else {
                alert('Índice inválido. Por favor, escolha um índice de card válido.');
            }
        });
    })
    .catch(error => console.error('Erro ao carregar a página:', error));

let cardCount = 1;

// Formatar a data para "dd/mm/yyyy"
function formatDate(dateStr) {
    const [year, month, day] = dateStr.split('-');
    return `${day}/${month}/${year}`;
}

// CARD - adicionar
function addCard(newsInfo = null) {
    const cardContainer = document.getElementById('cards-container');
    const newCard = document.createElement('div');
    newCard.classList.add('col-12', 'col-md-6', 'col-lg-3', 'mb-4', 'card-wrapper');

    newCard.innerHTML = `
        <div class="card" style="height: 100%;">
            <img src="${newsInfo ? newsInfo.imageUrl : '../../../midias/img/global/imagem.svg'}"
                class="my-divulgacao_noticias-s1-imagem card-image" alt="Imagem da notícia">
            <div class="card-body">
                <h5 class="card-title">${newsInfo ? newsInfo.title : 'Título'}</h5>
                <h6 class="card-subtitle mb-2">
                    <span class="card-date">${newsInfo ? newsInfo.date : 'Dia'}</span> | 
                    <span class="card-time">${newsInfo ? newsInfo.time : 'Horário'}</span>
                </h6>
                <p class="card-text text-muted card-description">${newsInfo ? newsInfo.description : 'Descrição'}</p>
            </div>
            <div class="card-footer d-flex justify-content-between align-items-center">
                <span class="my-divulgacao_noticias-s1-index admin-only">${cardCount}</span>
                <button class="my-divulgacao_noticias-s1-btnVernoticias"
                    onclick="window.open('${newsInfo ? newsInfo.url : 'https://www.exemplo3.com'}', '_blank')">Ver Notícia</button>
            </div>
        </div>
    `;
    cardContainer.appendChild(newCard);
    cardCount++;
    updateCardIndices();
}

// Atualizar índices
function updateCardIndices() {
    const cards = document.querySelectorAll('.card-wrapper');
    cards.forEach((card, index) => {
        card.querySelector('.my-divulgacao_noticias-s1-index').textContent = index + 1;
    });
}

// Abrir modal de exclusão
function openDeleteModal() {
    const deleteModal = new bootstrap.Modal(document.getElementById('deleteModal'));
    deleteModal.show();
}

// Excluir card
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

// Abrir modal de edição
function openEditModal() {
    const editModal = new bootstrap.Modal(document.getElementById('editModal'));
    editModal.show();
}

// Ordenar por data
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
fetch('../../../html/pages/divulgacao_noticias/section1.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('my-divulgacao_noticias-s1-importacao').innerHTML = data;

        document.getElementById('saveChangesBtn').addEventListener('click', function () {
            const index = document.getElementById('editIndex').value - 1;
            const cards = document.querySelectorAll('.card-wrapper');

            if (index >= 0 && index < cards.length) {
                const selectedCard = cards[index];

                const fileInput = document.getElementById('editImage');
                const file = fileInput.files[0];

                const title = document.getElementById('editTitle').value;
                const description = document.getElementById('editDescription').value;
                const dateInput = document.getElementById('editDate').value;
                const timeInput = document.getElementById('editTime').value;
                const newsUrl = document.getElementById('editUrl').value;

                const updateCardFields = (imageDataUrl) => {
                    if (imageDataUrl) {
                        selectedCard.querySelector('.card-image').src = imageDataUrl;
                    }

                    selectedCard.querySelector('.card-title').innerText = title;
                    selectedCard.querySelector('.card-description').innerText = description;

                    if (dateInput && timeInput) {
                        const formattedDate = formatDate(dateInput);
                        selectedCard.querySelector('.card-date').innerText = formattedDate;
                        selectedCard.querySelector('.card-time').innerText = timeInput;
                    }

                    selectedCard.querySelector('.my-divulgacao_noticias-s1-btnVernoticias')
                        .setAttribute('onclick', `window.open('${newsUrl}', '_blank')`);

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

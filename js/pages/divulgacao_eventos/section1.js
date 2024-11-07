let cardCount = 1; // Variável para contar o número total de cards



// CARD - adicionar
function addCard() {
    const cardContainer = document.getElementById('cards-container');
    const newCard = document.createElement('div');
    newCard.classList.add('col-12', 'col-md-6', 'col-lg-3', 'mb-4', 'card-wrapper');

    // Card HTML com o índice correto atualizado
    newCard.innerHTML = `
            <div class="card" style="height: 100%;">
                <img src="../../../midias/img/global/imagem.svg"
                    class="my-divulgacao_eventos-s1-imagem card-image" alt="Imagem do evento">
                <div class="card-body">
                    <h5 class="card-title">Título</h5>
                    <h6 class="card-subtitle mb-2"><span class="card-date">Dia</span> | <span
                            class="card-time">Horário</span></h6>
                    <h6 class="card-subtitle mb-2 text-muted card-location">Local</h6>
                    <h6 class="card-subtitle mb-2 text-muted card-price">Preço</h6>
                    <p class="card-text text-muted card-description">Descrição</p>
                </div>
                <div class="card-footer d-flex justify-content-between align-items-center">
                    <span class="my-divulgacao_eventos-s1-index">${cardCount}</span> <!-- Índice atualizado -->
                    <button class="my-divulgacao_eventos-s1-btnVerEventos"
                        onclick="window.open('https://www.exemplo3.com', '_blank')">Ver
                        Evento</button>
                </div>
            </div>
        `;
    cardContainer.appendChild(newCard);
    cardCount++; // Incrementa o contador de cards
    updateCardIndices(); // Atualiza todos os índices após a adição
}



// CARD - atualizar índices
function updateCardIndices() {
    const cards = document.querySelectorAll('.card-wrapper'); // Seleciona todos os cards
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
    const indexToDelete = parseInt(document.getElementById('deleteIndex').value, 10) - 1; // Converte o índice 1-based para 0-based
    const cards = document.querySelectorAll('.card-wrapper');

    if (indexToDelete >= 0 && indexToDelete < cards.length) {
        // Remove o card selecionado
        cards[indexToDelete].remove();

        // Decrementa o contador de cards para manter a contagem correta
        cardCount--;

        // Atualiza os índices visíveis dos cards
        updateCardIndices();

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



// Formatar a data para "dd/mm/yyyy"
function formatDate(dateStr) {
    const [year, month, day] = dateStr.split('-');
    return `${day}/${month}/${year}`;
}



// CARD - Ordenar por data
function sortCardsByDate() {
    const cardsContainer = document.getElementById('cards-container');
    const cards = Array.from(cardsContainer.getElementsByClassName('card-wrapper'));

    // Ordena os cards com base na data (formato dd/mm/yyyy)
    cards.sort((a, b) => {
        const dateA = new Date(a.querySelector('.card-date').textContent.split('/').reverse().join('-'));
        const dateB = new Date(b.querySelector('.card-date').textContent.split('/').reverse().join('-'));
        return dateA - dateB;
    });

    // Remove todos os cards e os adiciona na nova ordem
    cardsContainer.innerHTML = '';
    cards.forEach(card => cardsContainer.appendChild(card));

    // Atualiza os índices dos cards após a ordenação
    updateCardIndices();
}



// Carrega o conteúdo HTML e inicializa o código ao carregar a página
fetch('../../../html/pages/divulgacao_eventos/section1.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('my-divulgacao_eventos-s1-importacao').innerHTML = data;

        document.getElementById('saveChangesBtn').addEventListener('click', function () {
            const index = document.getElementById('editIndex').value - 1; // Índice baseado em 1
            const cards = document.querySelectorAll('.card');
    
            if (index >= 0 && index < cards.length) {
                const selectedCard = cards[index];
    
                // Atualiza a imagem, título, local, preço e descrição do card
                const imageUrl = document.getElementById('editImage').value;
                if (imageUrl) {
                    selectedCard.querySelector('.card-image').src = imageUrl;
                }
                selectedCard.querySelector('.card-title').innerText = document.getElementById('editTitle').value;
                selectedCard.querySelector('.card-location').innerText = document.getElementById('editLocation').value;
                selectedCard.querySelector('.card-price').innerText = "R$ " + document.getElementById('editPrice').value;
                selectedCard.querySelector('.card-description').innerText = document.getElementById('editDescription').value;
    
                // Formata e exibe a data e hora
                const dateInput = document.getElementById('editDate').value;
                const timeInput = document.getElementById('editTime').value;
                if (dateInput && timeInput) {
                    const formattedDate = formatDate(dateInput); // Formatação da data
                    selectedCard.querySelector('.card-date').innerText = formattedDate;
                    selectedCard.querySelector('.card-time').innerText = timeInput;
                }
    
                // Atualiza o link do botão "Ver Evento"
                selectedCard.querySelector('.my-divulgacao_eventos-s1-btnVerEventos').setAttribute(
                    'onclick', `window.open('${document.getElementById('editUrl').value}', '_blank')`
                );
    
                // Fecha o modal
                const editModal = bootstrap.Modal.getInstance(document.getElementById('editModal'));
                editModal.hide();
            } else {
                alert('Índice inválido. Por favor, escolha um índice de card válido.');
            }
        });
    })
    .catch(error => console.error('Erro ao carregar a página:', error));


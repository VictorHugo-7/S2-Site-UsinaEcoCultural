fetch('../../../html/pages/index/section3.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('my-ix-section3').innerHTML = data;


        document.getElementById('my-ixS3-addCard').addEventListener('click', function () {
            const newCard = document.createElement('div');
            newCard.classList.add('col-12', 'col-md-6', 'col-lg-3', 'mb-4');

            newCard.innerHTML = `
                <div class="card">
                    <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/111.webp" class="card-image" alt="Novo Card">
                    <div class="card-body">
                        <h5 class="card-title">Novo Título</h5>
                        <h6 class="card-subtitle mb-2">Dia | Horário</h6>
                        <h6 class="card-subtitle mb-2 text-muted">Local</h6>
                        <h6 class="card-subtitle mb-2 text-muted">Preço</h6>
                        <p class="card-text text-muted">Descrição do novo evento</p>
                    </div>
                    <div class="card-footer">
                        <button type="button" class="btn btn-primary">Ver</button>
                    </div>
                </div>
            `;

            document.getElementById('my-ixS3-cardContainer').appendChild(newCard);
        });

    })
    .catch(error => console.error('Erro ao carregar a página:', error));
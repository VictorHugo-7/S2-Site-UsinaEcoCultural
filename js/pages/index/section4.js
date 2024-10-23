fetch('../../../html/pages/index/section4.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('my-ix-section4').innerHTML = data;


        document.getElementById('my-ixS4-addCard').addEventListener('click', function () {
            const newCard = document.createElement('div');
            newCard.classList.add('col-12', 'col-md-6', 'col-lg-3', 'mb-4');

            newCard.innerHTML = `
                <div class="card">
                    <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/111.webp" class="card-image" alt="Novo Card">
                    <div class="card-body">
                        <h5 class="card-title">Título</h5>
                        <h6 class="card-subtitle mb-2">Horário</h6>
                        <p class="card-text text-muted">Descrição </p>
                    </div>
                    <div class="card-footer">
                        <button type="button" class="btn btn-primary">Ver</button>
                    </div>
                </div>
            `;

            document.getElementById('my-ixS4-cardContainer').appendChild(newCard);
        });

    })
    .catch(error => console.error('Erro ao carregar a página:', error));
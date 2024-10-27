fetch('../../../html/pages/doacao/section1.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('my-doacao-s1-importacao').innerHTML = data;

        // Variável para armazenar o valor da doação
        let valorDoacao = 0;

        // Adicionando event listeners aos botões de valor
        const buttons = document.querySelectorAll('.my-doacao-s1-btnValores');
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                valorDoacao = parseFloat(button.getAttribute('data-valor'));
                // Remover a seleção anterior
                buttons.forEach(btn => btn.classList.remove('selected'));
                button.classList.add('selected');
                document.getElementById('inputValor').value = ''; // Limpar o input
            });
        });

        // Adicionando event listener ao input de valor
        const inputValor = document.getElementById('inputValor');
        inputValor.addEventListener('input', () => {
            const inputValue = parseFloat(inputValor.value);
            if (!isNaN(inputValue)) {
                valorDoacao = inputValue;
                // Remover a seleção dos botões
                buttons.forEach(btn => btn.classList.remove('selected'));
            }
        });

        // Adicionando event listener ao botão "DOE AGORA"
        const btnDoeAgora = document.querySelector('.my-doacao-s1-btnDoeAgora');
        btnDoeAgora.addEventListener('click', () => {
            if (valorDoacao > 0) {
                document.getElementById('valorDoacao').innerText = valorDoacao.toFixed(2);
                // Aqui você pode alterar a src do QR Code se necessário
                $('#doacaoModal').modal('show'); // Exibir o modal (usando Bootstrap)
            } else {
                alert('Por favor, selecione um valor para doar.');
            }
        });
        
        // Adicionando event listener ao botão de fechar do modal
        const closeModalButton = document.querySelector('.close');
        closeModalButton.addEventListener('click', () => {
            $('#doacaoModal').modal('hide'); // Ocultar o modal
        });

    })
    .catch(error => console.error('Erro ao carregar a página:', error));

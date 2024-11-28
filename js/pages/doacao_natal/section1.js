fetch('../../../html/pages/doacao_natal/section1.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('my-doacao_natal-s1-importacao').innerHTML = data;

        // Variável para armazenar o valor da doação
        let valordoacao_natal = 0;

        // Adicionando event listeners aos botões de valor
        const buttons = document.querySelectorAll('.my-doacao_natal-s1-btnValores');
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                valordoacao_natal = parseFloat(button.getAttribute('data-valor'));
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
                valordoacao_natal = inputValue;
                // Remover a seleção dos botões
                buttons.forEach(btn => btn.classList.remove('selected'));
            }
        });

        // Adicionando event listener ao botão "DOE AGORA"
        const btnDoeAgora = document.querySelector('.my-doacao_natal-s1-btnDoeAgora');
        btnDoeAgora.addEventListener('click', () => {
            if (valordoacao_natal > 0) {
                document.getElementById('valordoacao_natal').innerText = valordoacao_natal.toFixed(2);
                // Aqui você pode alterar a src do QR Code se necessário
                $('#doacao_natalModal').modal('show'); // Exibir o modal (usando Bootstrap)
            } else {
                alert('Por favor, selecione um valor para doar.');
            }
        });
        
        // Adicionando event listener ao botão de fechar do modal
        const closeModalButton = document.querySelector('.close');
        closeModalButton.addEventListener('click', () => {
            $('#doacao_natalModal').modal('hide'); // Ocultar o modal
        });

    })
    .catch(error => console.error('Erro ao carregar a página:', error));

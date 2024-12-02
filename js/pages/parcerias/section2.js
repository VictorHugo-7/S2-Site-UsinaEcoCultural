fetch('../../../html/pages/parcerias/section2.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('my-parcerias-s2-importacao').innerHTML = data;

        const partners = [
            { 
                name: 'Instituto Mauá de Tecnologia', 
                description: 'Centro de referência em tecnologia, engenharia, design e administração',
                image: '../../../midias/img/pages/parcerias/parceiroInstitutoMauaDeTecnologia.jpg'
            },
            { 
                name: 'Centro Universitário São Camilo', 
                description: 'Instituição de ensino superior com destaque em áreas da saúde',
                image: '../../../midias/img/pages/parcerias/parceiroCentroUniversitarioSaoCamilo.png'
            },
            { 
                name: 'Etec Getúlio Vargas', 
                description: 'Escola Técnica Estadual de São Paulo de ensino técnico e profissionalizante.',
                image: '../../../midias/img/pages/parcerias/parceiroEtecGetulioVargas.jpg'
            },
            { 
                name: 'FAUUSP', 
                description: 'Renomada escola de arquitetura e urbanismo',
                image: '../../../midias/img/pages/parcerias/parceiroFauusp.png'
            },
            { 
                name: 'USCS', 
                description: 'Instituição pública de ensino superior que oferece cursos em diversas áreas',
                image: '../../../midias/img/pages/parcerias/parceiroUscs.png'
            },
            { 
                name: 'Escola Nacional Paulo Freire', 
                description: 'Escola de formação baseada na pedagogia crítica de Paulo Freire',
                image: '../../../midias/img/pages/parcerias/parceiroEscolaNacionalPauloFreire.jpg'
            },
            { 
                name: 'Escola Da Cidade', 
                description: 'Faculdade de arquitetura e urbanismo',
                image: '../../../midias/img/pages/parcerias/parceiroEscolaDaCidade.png'
            },
            { 
                name: 'Escoteiros do Brasil', 
                description: 'Movimento educacional que promove valores de cidadania, liderança e sustentabilidade',
                image: '../../../midias/img/pages/parcerias/parceiroEscoteirosDoBrasil.png'
            }
        ];


        function createGrid(container, data) {
            const grid = document.getElementById(container);
            data.forEach((item, index) => {
                const card = document.createElement('div');
                card.className = 'my-parcerias-s2-partner-card';
                card.innerHTML = `
                    <img src="${item.image}" alt="${item.name}">
                `;
                card.addEventListener('click', () => {
                    const modal = new bootstrap.Modal(document.getElementById('partnerModal'));
                    document.getElementById('modalTitle').textContent = item.name;
                    document.getElementById('modalDescription').textContent = item.description;
                    modal.show();
                });
                grid.appendChild(card);
            });
        }

        createGrid('partnersGrid', partners);
    })
    .catch(error => console.error('Erro ao carregar a página:', error));
fetch('../../../html/pages/parcerias/section1.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('my-parcerias-s1-importacao').innerHTML = data;

        const connections = [
            { 
                name: 'Cades Ipiranga', 
                description: 'Conselho Regional de Meio Ambiente, Desenvolvimento Sustentável e Cultura de Paz',
                image: '../../../midias/img/pages/parcerias/conexaoCadesIpiranga.png'
            },
            { 
                name: 'Cades Vila Mariana', 
                description: 'Voltado para ações ambientais e sociais na região da Vila Mariana',
                image: '../../../midias/img/pages/parcerias/conexaoCadesVilaMariana.jpg'
            },
            { 
                name: 'Casa Amarela', 
                description: 'Espaço cultural e comunitário que promove atividades de arte, cultura e sustentabilidade',
                image: '../../../midias/img/pages/parcerias/conexaoCasaAmarela.png'
            },
            { 
                name: 'Muda Mooca', 
                description: 'Sustentabilidade e envolvimento local',
                image: '../../../midias/img/pages/parcerias/conexaoMudaMooca.png'
            },
            { 
                name: 'Missão Ambiental', 
                description: 'Organização que atua em educação e conscientização ambiental',
                image: '../../../midias/img/pages/parcerias/conexaoMissaoAmbiental.jpg'
            },
            { 
                name: 'Muda Ipiranga', 
                description: 'Coletivo comunitário que realiza ações de plantio e educação ambiental',
                image: '../../../midias/img/pages/parcerias/conexaoMudaIpiranga.jpg'
            },
            { 
                name: 'Casa Das Caldeiras', 
                description: 'Centro cultural e histórico em São Paulo',
                image: '../../../midias/img/pages/parcerias/conexaoCasaDasCaldeiras.png'
            },
            { 
                name: 'Museu do Ipiranga', 
                description: 'Instituição histórica e cultural dedicada à preservação e divulgação da história do Brasil',
                image: '../../../midias/img/pages/parcerias/conexaoMuseuDoIpiranga.png'
            }
        ];

        function createGrid(container, data) {
            const grid = document.getElementById(container);
            data.forEach((item, index) => {
                const card = document.createElement('div');
                card.className = 'my-parcerias-s1-partner-card';
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

        createGrid('connectionsGrid', connections);
    })
    .catch(error => console.error('Erro ao carregar a página:', error));
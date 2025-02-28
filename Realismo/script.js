const popupContainer = document.getElementById('popup-container');
const popup = document.getElementById('popup');
const popupContent = document.getElementById('popup-content');
const closePopupButton = document.getElementById('close-popup');

// Informações dos autores
const autoresInfo = {
    machado: {
        nome: 'Machado de Assis',
        bio: 'Joaquim Maria Machado de Assis, amplamente considerado o maior escritor brasileiro, é um dos fundadores da Academia Brasileira de Letras.',
        obras: ['Memórias Póstumas de Brás Cubas', 'Dom Casmurro', 'Quincas Borba'],
        caracteristicas: ['Realismo', 'Ironia', 'Crítica social', 'Profundidade psicológica']
    },
    aluisio: {
        nome: 'Gustave Flaubert',
        bio: 'Gustave Flaubert (1821-1880) foi um escritor francês considerado um dos maiores romancistas do século XIX. Ele nasceu em Rouen, na França, e passou grande parte de sua vida nessa cidade. Flaubert é conhecido por seu estilo minucioso e detalhado, sua busca pela perfeição na escrita e pela crítica social presente em suas obras.',
        obras: ['Madame Bovary'],
        caracteristicas: ['Naturalismo', 'Crítica social', 'Retrato da miséria urbana', 'Estudo do comportamento humano']
    },
    raul: {
        nome: 'Raul Pompeia',
        bio: 'Raul d’Ávila Pompeia foi um escritor, intelectual e abolicionista brasileiro. É famoso por seu romance O Ateneu, publicado em 1888.',
        obras: ['O Ateneu'],
        caracteristicas: ['Realismo', 'Crítica da sociedade brasileira', 'Enfoque psicológico', 'Estilo realista e detalhado']
    }
};

// Abrir pop-up ao clicar em um autor
document.querySelectorAll('.autor').forEach(autor => {
    autor.addEventListener('click', function () {
        const autorSelecionado = this.getAttribute('data-autor');
        const info = autoresInfo[autorSelecionado];

        popupContent.innerHTML = `
            <h2>${info.nome}</h2>
            <p>${info.bio}</p>
            <h3>Principais Obras:</h3>
            <ul>
                ${info.obras.map(obra => `<li>${obra}</li>`).join('')}
            </ul>
            <h3>Características:</h3>
            <div class="caracteristicas">
                <ul>
                    ${info.caracteristicas.map(caracteristica => `<li>${caracteristica}</li>`).join('')}
                </ul>
            </div>
        `;

        popupContainer.classList.add('show');
        popup.classList.add('show');
    });
});

// Fechar pop-up
closePopupButton.addEventListener('click', function () {
    popupContainer.classList.remove('show');
    popup.classList.remove('show');
});

// Fechar pop-up ao clicar fora dele
popupContainer.addEventListener('click', function (event) {
    if (event.target === this) {
        popupContainer.classList.remove('show');
        popup.classList.remove('show');
    }
});
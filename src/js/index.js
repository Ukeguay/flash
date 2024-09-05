// Array para almacenar las flashcards
let flashcards = [];

// Obtener elementos del DOM
const formulario = document.getElementById('formulario-flashcard');
const listaFlashcards = document.getElementById('flashcards');

// Evento para crear una nueva flashcard
formulario.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const pregunta = document.getElementById('pregunta').value;
    const respuesta = document.getElementById('respuesta').value;
    const categoria = document.getElementById('categoria').value;
    
    // Crear objeto flashcard
    const flashcard = {
        pregunta: pregunta,
        respuesta: respuesta,
        categoria: categoria
    };
    
    // Agregar flashcard al array
    flashcards.push(flashcard);
    
    // Limpiar formulario
    formulario.reset();
    
    // Actualizar lista de flashcards
    mostrarFlashcards();
});

// Función para mostrar las flashcards
function mostrarFlashcards() {
    listaFlashcards.innerHTML = '';
    
    flashcards.forEach((card, index) => {
        const li = document.createElement('li');
        li.className = 'flashcard';
        li.innerHTML = `
            <h3>${card.pregunta}</h3>
            <p>${card.respuesta}</p>
            <p class="categoria">Categoría: ${card.categoria || 'Sin categoría'}</p>
        `;
        listaFlashcards.appendChild(li);
    });
}

// Función para filtrar flashcards por categoría
function filtrarPorCategoria(categoria) {
    const flashcardsFiltradas = flashcards.filter(card => card.categoria.toLowerCase() === categoria.toLowerCase());
    
    listaFlashcards.innerHTML = '';
    
    flashcardsFiltradas.forEach((card, index) => {
        const li = document.createElement('li');
        li.className = 'flashcard';
        li.innerHTML = `
            <h3>${card.pregunta}</h3>
            <p>${card.respuesta}</p>
            <p class="categoria">Categoría: ${card.categoria}</p>
        `;
        listaFlashcards.appendChild(li);
    });
}

// Función para guardar flashcards en el almacenamiento local
function guardarFlashcards() {
    localStorage.setItem('flashcards', JSON.stringify(flashcards));
}

// Función para cargar flashcards desde el almacenamiento local
function cargarFlashcards() {
    const flashcardsGuardadas = localStorage.getItem('flashcards');
    if (flashcardsGuardadas) {
        flashcards = JSON.parse(flashcardsGuardadas);
        mostrarFlashcards();
    }
}

// Variables
const agregarNuevo = document.getElementById("agregar_nuevo");
const dialogo = document.getElementById("dialogo");
const cerrarFormulario = document.getElementById("cerrar");
const miLibreria = [];

agregarNuevo.addEventListener("click", () => {
    dialogo.showModal(); // Abre el cuadro de diálogo
});

cerrarFormulario.addEventListener("click", () => {
    dialogo.close(); // Cierra el cuadro de diálogo
});

// Constructor de Objetos
function Libro(titulo, autor, paginas, leido) {
    this.titulo = titulo;
    this.autor = autor;
    this.paginas = paginas;
    this.leido = leido;
    this.info = function () {
        return titulo + ", " + autor + ", " + paginas + ", " + leido;
    };
}

function agregarLibroALibreria(nuevo) {
    miLibreria.push(nuevo);
}

function recorrer(miLibreria) {
    miLibreria.forEach(element => {
        console.log(element);
    });
}
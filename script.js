// Variables
const miLibreria = [];

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

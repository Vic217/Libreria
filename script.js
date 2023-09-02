// Variables
const agregarNuevo = document.getElementById("agregar_nuevo");
const dialogo = document.getElementById("dialogo");
const cerrar = document.getElementById("cerrar");
const añadir = document.getElementById("añadir");
const formulario = document.getElementById("formulario");
const titulo = document.getElementById("titulo");
const autor = document.getElementById("autor");
const paginas = document.getElementById("paginas");
const leido = document.getElementById("leido");
const cuerpo = document.getElementById("cuerpo");
const vacia = document.getElementById("vacia");
const miLibreria = [];

// Constructor de Objetos
function Libro(titulo, autor, paginas, leido) {
    this.titulo = titulo;
    this.autor = autor;
    this.paginas = paginas;
    this.leido = leido;
}

// Creo un prototipo con el método para cambiar el estado de leido
Libro.prototype.cambiarLeido = function() {
    this.leido = !this.leido;
}

// Función que invoca el metodo del prototipo
function cambiarLeido(indice) {
    miLibreria[indice].cambiarLeido();

    recorrer();
}

// Función de eliminar_libro
function eliminar_libro(indice) {
    miLibreria.splice(indice, 1);

    // Cambia id de tabla cuando no tiene libros registrados
    if (miLibreria.length === 0){
        const con_datos = document.getElementById("datos");
        con_datos.removeAttribute("id");
        con_datos.setAttribute("id", "vacia");
    }
    recorrer();
}

// Recorrer la lista
function recorrer() {

    // Elimina la información que previamente tenía la tabla
    cuerpo.innerHTML = "";

    // Agrega la información de cada libro en la tabla
    for (let i = 0; i < miLibreria.length; i++){
        const nueva_fila = document.createElement("tr");
        nueva_fila.setAttribute("class", "nueva");
        const celdaT = document.createElement("td");
        const celdaA = document.createElement("td");
        const celdaP = document.createElement("td");
        const celdaL = document.createElement("td");
        const botonLeido = document.createElement("button");
        const eliminar = document.createElement("td");
        const botonEliminar = document.createElement("button");

        celdaT.textContent = miLibreria[i].titulo;
        celdaA.textContent = miLibreria[i].autor;
        celdaP.textContent = miLibreria[i].paginas;

        botonLeido.setAttribute("class", "estado");
        let estado = miLibreria[i].leido ? "Si lo he leído" : "No lo he leído";
        botonLeido.textContent = estado;
        miLibreria[i].leido ? botonLeido.setAttribute("id", "si") : botonLeido.setAttribute("id", "no");
        celdaL.appendChild(botonLeido);
        botonEliminar.textContent = "eliminar";
        eliminar.appendChild(botonEliminar);
        botonEliminar.setAttribute("id", i);

        nueva_fila.appendChild(celdaT);
        nueva_fila.appendChild(celdaA);
        nueva_fila.appendChild(celdaP);
        nueva_fila.appendChild(celdaL);
        nueva_fila.appendChild(eliminar);
        cuerpo.appendChild(nueva_fila);

        // Elimina datos de la tabla, invoca la función eliminar_libro 
        botonEliminar.addEventListener("click", () => {
            eliminar_libro(i);
        });

        // Cambia el estado del leido del libro, invoca la función cambiarLeido
        botonLeido.addEventListener("click", () => {
            cambiarLeido(i);
        })
    }
}

agregarNuevo.addEventListener("click", (e) => {
    e.preventDefault();
    dialogo.showModal(); // Abre el cuadro de diálogo
});

// Agrega el libro a tabla
añadir.addEventListener("click", (e) => {
    e.preventDefault();

    // Verifica si los campos del formulario están llenos
    if (titulo.value && autor.value && paginas.value) {
        const nuevo_libro = new Libro(titulo.value, autor.value, paginas.value, leido.checked);
        agregarLibroALibreria(nuevo_libro);
        formulario.reset();
        dialogo.close();
    } else {
        alert("Por favor, complete todos los campos antes de agregar el libro.");
    }
});

cerrar.addEventListener("click", (e) => {
    e.preventDefault();
    formulario.reset();
    dialogo.close(); // Cierra el cuadro de diálogo
});

function agregarLibroALibreria(nuevo) {
    miLibreria.push(nuevo);
    if (miLibreria.length > 0) {
        vacia.removeAttribute("id");
        vacia.setAttribute("id", "datos");
    }

    recorrer();
}
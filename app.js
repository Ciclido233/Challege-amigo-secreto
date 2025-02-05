// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// OBJETIVO PRINCIPAL: Crear una app para un sorteo de "Amigo Secreto" 
// Los usuarios pueden agregar nombres a una lista y luego sortear un amigo al azar.
// Realizado por ANGELO KEVIN GARCÍA HERNÁNDEZ

// Lista donde almacenaremos los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    // Input donde el usuario escribe el nombre
    let input = document.getElementById("amigo");
    let nombre = input.value.trim(); // Eliminamos espacios en blanco extra

    // Verificamos que el usuario haya ingresado algo
    if (nombre === "") {
        alert("Por favor, inserte un nombre válido.");
        return; // Si está vacío, no se agrega nada y se detiene la función
    }
    
    // Agregamos el nombre al array de amigos
    amigos.push(nombre);
    
    // Actualizamos la lista en la pantalla para que el usuario vea los nombres añadidos
    actualizarLista();
    
    // Limpiamos el campo de entrada para que quede listo para otro nombre
    input.value = "";
}

// Función para actualizar la lista visible de amigos en la página
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiamos la lista antes de actualizarla
    
    // Recorremos el array y creamos un <li> por cada amigo en la lista
    amigos.forEach(nombre => {
        let li = document.createElement("li"); // Creamos un elemento de lista
        li.textContent = nombre; // Le asignamos el nombre del amigo
        lista.appendChild(li); // Lo añadimos a la lista en la página
    });
}

// Función para sortear un amigo aleatoriamente
function sortearAmigo() {
    // Comprobamos si hay al menos un amigo en la lista antes de sortear
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return; // Si no hay amigos, detenemos la ejecución
    }
    
    // Generamos un índice aleatorio dentro del array de amigos
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio]; // Obtenemos el nombre sorteado
    
    // Mostramos el resultado en la página dentro de una lista
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>El amigo sorteado es: <strong>${amigoSorteado}</strong></li>`;
}

function changeBackgroundColor() {
    const backgroundColor = prompt("Ingrese un color de fondo para la web");

    document.body.style.backgroundColor = backgroundColor;

}
//changeBackgroundColor();

function registerBrothers() {
    // Paso1: Debemos saber la cantidad de hermanos
    const brotherQuantity = Number(prompt("Ingrese la cantidad de hermanos"));
    const brothers = [];
    
    let counter=0
    while(counter < brotherQuantity){
        const brotherName = prompt("Ingresa el nombre de tu hermano" + counter);
        brothers.push(brotherName);
        counter++;
    }
    console.log(brothers);
}

function generarColorHexadecimal() {
    const letras = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
}

function generateBlocks() {
    const blocksNumber = Number(prompt("Ingrese la cantidad de bloques que desa dibujar"));

    let counter = 0;
    while(counter < blocksNumbers){
        const newDiv = document.createElement("div");
        newDiv.style.width = "100px";
        newDiv.style.height = "100px";
        newDiv.style.backgroundColor = generarColorHexadecimal();
        document.body.appendChild(newDiv);
        counter++;
    }
}

// Función para generar una elección aleatoria de la computadora
function elegirOpcionAleatoria() {
    const opciones = ["piedra", "papel", "tijera"];
    const indiceAleatorio = Math.floor(Math.random() * opciones.length);
    return opciones[indiceAleatorio];
}

function yankenpo() {
    // Función para generar una elección aleatoria de la computadora
    function elegirOpcionAleatoria() {
        const opciones = ["piedra", "papel", "tijera"];
        const indiceAleatorio = Math.floor(Math.random() * opciones.length);
        return opciones[indiceAleatorio];
    }

    // Función para determinar el resultado del juego
    function determinarResultado(usuario, computadora) {
        if (usuario === computadora) {
            return "¡Es un empate!";
        }
        if (
            (usuario === "piedra" && computadora === "tijera") ||
            (usuario === "tijera" && computadora === "papel") ||
            (usuario === "papel" && computadora === "piedra")
        ) {
            return "¡Ganaste!";
        } else {
            return "¡Perdiste!";
        }
    }

    // Pide al usuario que elija una opción
    const eleccionUsuario = prompt("Elige: piedra, papel o tijera").toLowerCase();

    // Verifica que la elección sea válida
    if (["piedra", "papel", "tijera"].includes(eleccionUsuario)) {
        const eleccionComputadora = elegirOpcionAleatoria();
        console.log(`Tu elección: ${eleccionUsuario}`);
        console.log(`Elección de la computadora: ${eleccionComputadora}`);

        // Determina y muestra el resultado
        const resultado = determinarResultado(eleccionUsuario, eleccionComputadora);
        alert(resultado);
    } else {
        alert("Opción inválida. Por favor, elige piedra, papel o tijera.");
    }
}






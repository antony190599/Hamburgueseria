const inputColor = document.getElementById("input-color");
const btnChangeColor = document.getElementById("btn-change-color");

btnChangeColor.addEventListener("click", function () {
    console.log(inputColor.value);
    document.body.style.backgroundColor = inputColor.value;

});
const inputRegisterBrothers = document.getElementById(
    "input-register-brother"
);
const brotherContainer = document.getElementById("brothers-container");
const inputBlocksQuantity = document.getElementById("input-blocks-quantity");
const inputYankenpo = document.getElementById("input-yankenpo");
const resultYankenpo = document.getElementById("result-yankenpo");

const gameArea = document.getElementById("game-area");










function changeBackgroundColor() {
    const backgroundColor = prompt("Ingrese un color de fondo para la web");

    document.body.style.backgroundColor = backgroundColor;

}
//changeBackgroundColor();

function registerBrothers() {
    // Paso1: Debemos saber la cantidad de hermanos
    const brotherQuantity = Number(inputRegisterBrothers.value);
    gameArea.innerHTML = '';
    const brothers = [];
    
    let counter = 0;
    while(counter < brotherQuantity){
        const newDiv = document.createElement("div");
        const newInput = document.createElement("input");
        newInput.placeholder = "Ingresa el nombre de tu hermano " + counter;
        newInput.type = "text";
        newInput.id = "input-name-" + counter;
        newInput.classList.add("input-brother-name");

        newDiv.appendChild(newInput);
        brotherContainer.appendChild(newDiv);
        counter++;
    }

    const newButton = document.createElement("button");
    newButton.textContent = "Imprimir nombres";

    newButton.addEventListener("click", function () {
        const inputs = document.querySelectorAll(".input-brother-name");

        for (let input of inputs) {
            const newP = document.createElement("P");
            newP.textContent = input.value;
            gameArea.appendChild(newP);
        }
    });
    brotherContainer.appendChild(newButton);
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
    const blocksNumber = Number(inputBlocksQuantity.value);
    gameArea.innerHTML = ''; // Limpiar el área de juego antes de agregar nuevos bloques
    for (let i = 0; i < blocksNumber; i++) {
        const newDiv = document.createElement("div");
        newDiv.style.width = "100px";
        newDiv.style.height = "100px";
        newDiv.style.backgroundColor = generarColorHexadecimal();
        newDiv.style.display = "inline-block";
        newDiv.style.margin = "5px";
        gameArea.appendChild(newDiv);
    }
}

// //function generateBlocks() {
//     //const blocksNumber = Number(prompt("Ingrese la cantidad de bloques que desa dibujar"));

//     //let counter = 0;
//     //while(counter < blocksNumbers){
//         const newDiv = document.createElement("div");
//         const blocksNumber = Number(inputBlocksQuantity.value);
//         gameArea.innerHTML = ''; // Limpiar el área de juego antes de agregar nuevos bloques
//     for (let i = 0; i < blocksNumber; i++) {
//         newDiv.style.width = "100px";
//         newDiv.style.height = "100px";
//         newDiv.style.backgroundColor = generarColorHexadecimal();
//         //document.body.appendChild(newDiv);
//         gameArea.appendChild(newDiv);
//         //counter++;
//         }
//     }
// }

// Función para generar una elección aleatoria de la computadora
function elegirOpcionAleatoria() {
    const opciones = ["piedra", "papel", "tijera"];
    const indiceAleatorio = Math.floor(Math.random() * opciones.length);
    return opciones[indiceAleatorio];
}

function yankenpo() {
    function elegirOpcionAleatoria() {
        const opciones = ["piedra", "papel", "tijera"];
        const indiceAleatorio = Math.floor(Math.random() * opciones.length);
        return opciones[indiceAleatorio];
    }

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

    const eleccionUsuario = inputYankenpo.value;
    if (["piedra", "papel", "tijera"].includes(eleccionUsuario)) {
        const eleccionComputadora = elegirOpcionAleatoria();
        const resultado = determinarResultado(eleccionUsuario, eleccionComputadora);

        // Mostrar el resultado en el div gameArea
        gameArea.innerHTML = `
            <p>Tu elección: ${eleccionUsuario}</p>
            <p>Elección de la computadora: ${eleccionComputadora}</p>
            <p>Resultado: ${resultado}</p>
        `;
    } else {
        gameArea.textContent = "Por favor, elige una opción válida.";
    }
}






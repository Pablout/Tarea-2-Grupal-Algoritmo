//Pedir al usuario un número y mostrar si es múltiplo de 3 y par. 

// Entrada: Se solicita al usuario que ingrese un número.
// Proceso: Se define la función que verifica si el número ingresado es múltiplo de 3 y par.
// Salida: Se verifica si el número es múltiplo de 3 y par y se muestra el resultado.
const read = require('prompt-sync')();
const write = console.log;

function verificarMultiplo3yPar() {
    let numero = parseInt(read("Ingrese un número: "));

    if (numero % 3 === 0 && numero % 2 === 0) {
        write( "numero es múltiplo de 3 y par.");
    } else {
        write( "numero no es múltiplo de 3 y no es par.");
    }
}

verificarMultiplo3yPar();

//Pedir al usuario un número y mostrar si es par o impar. 
// Entrada: Se solicita al usuario que ingrese un número.
// Proceso: Se verifica si el número ingresado es par o impar.
// Salida: Se muestra el resultado según si el número es par o impar.
const read = require('prompt-sync')();

const verificarParImpar = () => {
    let numero = parseInt(read("Ingrese un número: "));

    if (numero % 2 === 0) {
        console.log(numero + " es un número par.");
    } else {
        console.log(numero + " es un número impar.");
    }
};

verificarParImpar();

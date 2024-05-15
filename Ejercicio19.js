// Solicitar al usuario un número y mostrar si es divisible por 2 o impar. 

// Entrada: Se solicita al usuario que ingrese un número.
// Proceso: Función que verifica si el número ingresado por el usuario es divisible por 2 o impar.
// Salida: Se verifica si el número es divisible por 2 o impar y se muestra el resultado.
const read = require('prompt-sync')();
const write = console.log;
const verificarParImpar = () => {
    let numero = parseInt(read("Ingrese un número: "));

    if (numero % 2 === 0) {
        write(numero + " es divisible por 2 y es un número par.");
    } else {
        write(numero + " no es divisible por 2 y es un número impar.");
    }
};

verificarParImpar();

//  Pedir al usuario un número y mostrar si es negativo menor que -20, sino mostrar si es positivo par o impar múltiplo de 7. 

// Entrada: Se solicita al usuario que ingrese un número.
 // Proceso: Se verifican las condiciones para determinar la naturaleza del número.
// Salida: Se muestra el mensaje si el número es negativo y menor que -20, si el número es positivo y par, si el número es positivo, impar y múltiplo de 7 o si el número es positivo e impar, pero no es múltiplo de 7.

const read = require('prompt-sync')();
const write = console.log
function verificarNumero() {
    const numero = parseInt(read("Ingrese un número: "));

    if (numero < -20) {
        write(numero + " es negativo y menor que -20.");
    } else if (numero > 0) {
        if (numero % 2 === 0) {
            write(numero + " es positivo y par.");
        } else {
            if (numero % 7 === 0) {
                write(numero + " es positivo, impar y múltiplo de 7.");
            } else {
                write(numero + " es positivo e impar, pero no es múltiplo de 7.");
            }
        }
    } else {
        write(numero + " es cero.");
    }
}

verificarNumero();

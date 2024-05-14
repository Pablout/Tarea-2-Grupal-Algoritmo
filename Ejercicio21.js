//  Solicitar al usuario un número y mostrar si es un número de un solo dígito. 

// Entrada: Se solicita al usuario que ingrese un número.
// Proceso: Solicitar al usuario un número y mostrar si es un número de un solo dígito.
// Salida: Se verifica si el número ingresado es un número de un solo dígito y se muestra el resultado.
const read = require('prompt-sync')();
const write = console.log;
let numero = parseFloat(read("Ingrese un número: "));

if (numero >= 0 && numero < 10 && Number.isInteger(numero)) {
    write(numero + " es un número de un solo dígito.");
} else {
    write(numero + " no es un número de un solo dígito.");
}

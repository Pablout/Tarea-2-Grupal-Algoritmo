// Escribir un algoritmo que lea cuatro números y determine si el numero 1 es divisor del numero3 Y si el numero 2 es el doble del numero4. 

// Entrada: Declaración de variables y entrada de los primeros cuatro números.
// Proceso: Se define la función que lee cuatro números, verifica si el primero es divisor del tercero
//Salida: Se verifica si el primer número es divisor del tercero

const read = require('prompt-sync')();
const write = console.log
function verificarNumeros() {
    const numero1 = parseInt(read("Ingrese el número 1: "));
    const numero2 = parseInt(read("Ingrese el número 2: "));
    const numero3 = parseInt(read("Ingrese el número 3: "));
    const numero4 = parseInt(read("Ingrese el número 4: "));

    
    if (numero3 % numero1 === 0) {
        write(numero1 + " es divisor de " + numero3);
    } else {
        write(numero1 + " no es divisor de " + numero3);
    }

    
    if (numero2 === numero4 * 2) {
        write(numero2 + " es el doble de " + numero4);
    } else {
        write(numero2 + " no es el doble de " + numero4);
    }
}

verificarNumeros();

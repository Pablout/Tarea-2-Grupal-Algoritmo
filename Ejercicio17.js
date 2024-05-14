//  Pedir dos nombres e indicar si son iguales, si el primer nombre es mayor que el segundo o menor que el segundo 

// Entrada: Se solicita al usuario que ingrese dos nombres.
// Proceso: Se define la función que compara dos nombres ingresados por el usuario.
// Salida: Se compara los nombres y se muestra el resultado de la comparación.
const read = require('prompt-sync')();

const compararNombres = () => {
    const nombre1 = read("Ingrese el primer nombre: ");
    const nombre2 = read("Ingrese el segundo nombre: ");

    if (nombre1 === nombre2) {
        console.log("Los nombres son iguales.");
    } else if (nombre1 < nombre2) {
        console.log(nombre1 + " es menor que " + nombre2 + " en términos alfabéticos.");
    } else {
        console.log(nombre1 + " es mayor que " + nombre2 + " en términos alfabéticos.");
    }
};

compararNombres();

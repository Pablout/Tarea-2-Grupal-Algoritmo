//  Pedir al usuario un número y mostrar si es mayor o menor que 10. 


// Entrada: Declaración de variable para almacenar el número ingresado por el usuario.
// Proceso: Se define la función que verifica si el número ingresado es mayor, menor o igual a 10.
// Salida: Se compara el número ingresado con 10 y se muestra el resultado.
const read = require('prompt-sync')();

const verificarNumero = () => {
    let numero = parseFloat(read("Ingrese un número: "));

    if (numero > 10) {
        console.log(numero + " es mayor que 10.");
    } else if (numero < 10) {
        console.log(numero + " es menor que 10.");
    } else {
        console.log(numero + " es igual a 10.");
    }
};

verificarNumero();

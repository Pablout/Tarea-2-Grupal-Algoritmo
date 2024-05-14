// Solicitar al usuario su edad y mostrar si es mayor o menor de edad.

// Entrada: Declaración de variable para almacenar la edad ingresada por el usuario.
// Proceso: Se define la función que verifica si la edad ingresada es mayor o igual a 18 años.
// Salida: Se compara la edad ingresada con 18 años y se muestra el resultado.

const read = require('prompt-sync')();

const verificarEdad = () => {
    let edad = parseInt(read("Ingrese su edad: "));

    if (edad >= 18) {
        console.log("Usted es mayor de edad.");
    } else {
        console.log("Usted es menor de edad.");
    }
};

verificarEdad();

// Pedir al usuario su nota en un examen y determinar si ha aprobado o reprobado, considerando que la nota mínima de aprobación es 60 puntos. Si la nota es mayor a 40 y menor a 60 se queda para recuperación caso contario pierde la materia.  

 // Entrada: Se solicita al usuario que ingrese su nota en el examen.
// Proceso: Se define la función que determina si el usuario ha aprobado, reprobado o está en recuperación.
// Salida: Se evalúa la nota ingresada y se muestra el resultado.
const read = require('prompt-sync')();

let nota = parseFloat(read("Ingrese su nota en el examen: "));

if (nota >= 60) {
    console.log("Ha aprobado el examen.");
} else if (nota >= 40 && nota < 60) {
    console.log("Se queda para recuperación.");
} else {
    console.log("Ha reprobado el examen.");
}

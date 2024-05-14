// Calculadora de sueldo con aumento: Pide al usuario que ingrese su salario actual y el porcentaje de aumento que recibirá. Calcula y muestra el nuevo salario después del aumento.

// Entrada: Pide al usuario que ingrese su salario actual
// Proceso: Se calcula el aumento y el nuevo salario.
// Salida: Se muestra el nuevo salario después del aumento.

let read = require('prompt-sync')();

function calcularNuevoSalario() {
    let salarioActual = parseFloat(read("Ingrese su salario actual: "));
    let porcentajeAumento = parseFloat(read("Ingrese el porcentaje de aumento (%): "));

   
    if (porcentajeAumento >= 0) {
        let aumento = salarioActual * (porcentajeAumento / 100);
        let nuevoSalario = salarioActual + aumento;
        console.log("Su salario después del aumento será: $" + nuevoSalario.toFixed(2));
    } else {
        console.log("El porcentaje de aumento debe ser mayor o igual a cero.");
    }
}

calcularNuevoSalario();


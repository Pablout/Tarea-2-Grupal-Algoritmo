//Escribir un algoritmo que lea cuatro números y determine si el numero 1 es la mitad del número 2; Y si el numero 3 es divisor del numero4

// Entrada: Declaración de variables y entrada de los primeros cuatro números.
// Proceso: lee cuatro números y verifica si el primero es la mitad del segundo y si el tercero es divisor del cuarto.
// Salida: Se verifica si el número 1 es la mitad del número 2 y si el número 3 es divisor del número 4.
const read = require('prompt-sync')();
const write = console.log;


function leernumeros (){

    let valores=[]
    const valor  = (read("Ingrese el número 1:"));
    const valor2 =  (read("Ingrese el número 2:"));
    const valor3 =  (read("Ingrese el número 3:"));
    const valor4 =  (read("Ingrese el número 4:"));

    console.log(valor)
    console.log(valor2)
    console.log(valor3)
    console.log(valor4)
    


if (valor * 2 === valor2) {
    console.log(valor + " es la mitad de " + valor2);
} else {
    console.log(valor + " no es la mitad de " + valor2);
}


if (valor4 % valor3 === 0) {
    console.log(valor3 + "  divisor de " + valor4);
} else {
    console.log(valor3 + " no es divisor de " + valor4);
}


}
leernumeros ()
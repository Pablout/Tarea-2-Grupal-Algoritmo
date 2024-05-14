// 10. El banco POO ha decidido aumentar el límite de crédito de las tarjetas de crédito de sus clientes, para esto considera que:
//Si su cliente tiene tarjeta tipo 1, el aumento será del $100 .
// Si tiene tipo 2 el aumento será del $200
// Si tiene tipo 3, el aumento será del $300
// Para cualquier otro tipo será del 500
// Se pide realizar un algoritmo que ayude al banco a determinar el nuevo límite de
// crédito que tendrá una persona en su tarjeta considerando que después del aumento
// se tendrá que subir 10% adicionales a todas las tarjetas

//BOSQUEJO
// Analisis de requerimentos:
// los datos o variables del problema
// entrada: credito(leer), tipoTarjeta(leer)
// Los calculos o procesos que se hacen con las variables
// proceso: si (tipo==1)entonces
//              credito = credito + 100
//              creditoTotal = credito + (credito*0.10)
//        Sino Si (tipo==2) entonces
//              credito = credito + 200
//              creditoTotal = credito + (credito*0.10)
//        sino Si (tipo==3)entonces
//             credito = credito + 300
//             creditoTotal = credito + (credito*0.10)
//        sino
//              credito = credito + 500
//             creditoTotal = credito + (credito*0.10)
// La informacion de las variables procesadas
// salida: escribir "El credito",creditoTotal

const read = require('prompt-sync')();
const write = console.log

// LENGUAJE JAVASCRIPT

function banco(){
    let credito=0,tipo=0,creditoTotal=0
    write("Ingrese su credito")
    credito=parseInt(read())
    write("Ingrese el tipo de tarjeta")
    tipo=parseInt(read())
    if (tipo==1){
         credito = credito + 100
         creditoTotal = credito + (credito*0.10)
    }else if (tipo==2){
        credito = credito + 200
        creditoTotal = credito + (credito*0.10)
    }else if (tipo==3){
        credito = credito + 300
        creditoTotal = credito + (credito*0.10)
    }else{
        credito = credito + 500
        creditoTotal = credito + (credito*0.10)
    }
    write("El credito",creditoTotal)
}

banco()
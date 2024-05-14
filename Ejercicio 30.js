//30. Pide al usuario el total de su cuenta en un restaurante y el porcentaje de descuento
//que ofrece por ser cliente frecuente. Si el total de la cuenta supera los $70, aplica el
//descuento por fidelidad, de lo contrario, no se aplica ningún descuento. Calcula y
//muestra el monto final con el descuento aplicado más el IVA del 15%

//BOSQUEJO
// Analisis de requerimentos:
// los datos o variables del problema
// Entrada:  totalCuenta=0(LEER),porcentajeDescuento=0(LEER),descuento=0(PROCESO)
// Los calculos o procesos que se hacen con las variables
// Proceso: Si  (totalCuenta > 70)  entonces
//              descuento = (totalCuenta * porcentajeDescuento)/ 100;
//             montoFinal = totalCuenta - descuento;
//       Escribir "descuento y el iva incluido: $",montoFinal
//    sino
//        escribir "no se aplica ningun descuento"
//           montoFinal=totalCuenta+(totalCuenta*0.15)
//       escribir "el total de la factura solo incluye el iva: $",montoFinal
//       
//    FinSi
// La informacion de las variables procesadas
// Salida: escribir "gracias"

const read = require('prompt-sync')();
const write = console.log;

//LENGUAJE JAVASCRIPT 

function calcularMontoFinal() {
    let totalCuenta=0,porcentajeDescuento=0,descuento=0
    write("Ingrese el total de su cuenta en el restaurante: ")
    totalCuenta = parseFloat(read());
    write("Ingrese el porcentaje de descuento ofrecido por ser cliente frecuente: " )
    porcentajeDescuento = parseFloat(read())
    
    if (totalCuenta > 70) {
        descuento = (totalCuenta * porcentajeDescuento)/ 100;
        montoFinal = totalCuenta - descuento;
        write("descuento y el iva incluido: $",montoFinal)
    }else{
        write("no se aplica ningun descuento")
        montoFinal=totalCuenta+(totalCuenta*0.15)
        write("el total de la factura solo incluye el iva: $",montoFinal);
    }
    write( "gracias")
}

calcularMontoFinal();
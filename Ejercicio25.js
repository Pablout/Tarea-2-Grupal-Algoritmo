// Solicitar al usuario el precio de venta de un vehículo nuevo y su año de fabricación. Si el año de fabricación está entre el 2020 y 2023, aplicar un descuento del 5% sobre el precio de venta. mostrar el precio final incluyendo el 15% del IVA. 

// Entrada: Se solicita al usuario que ingrese el precio de venta del vehículo y su año de fabricación.
 // Proceso: Se calcula el monto del IVA y el precio final incluyendo el IVA.
// Salida: Se muestra el precio final a pagar por el vehículo, incluyendo descuento y IVA.


const read = require('prompt-sync')();
const write = console.log;


function ventaVehiculo () {
let precioVenta = parseFloat(read("Ingrese el precio de venta del vehículo: "));
let añoFabricacion = parseInt(read("Ingrese el año de fabricación del vehículo: "));

let descuento = 0;
if (añoFabricacion >= 2020 && añoFabricacion <= 2023) {
    descuento = precioVenta * 0.05;
}

let precioConDescuento = precioVenta - descuento;
let montoIVA = precioConDescuento * 0.15;
let precioFinal = precioConDescuento + montoIVA;

write("El precio final a pagar por el vehículo, incluyendo descuento y IVA, es de $" + precioFinal.toFixed(2));
}
ventaVehiculo ();
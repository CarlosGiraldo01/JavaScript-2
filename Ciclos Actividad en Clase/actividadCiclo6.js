//Actividad 10 --- do while

let deseaSalir
do {
    let monto = prompt("Ingrese el monto de la moneda")

    console.log("El monto de la moneda es: ", monto)
    deseaSalir = prompt("Desea salir? Ingrese 'si' o 'no'")

} while (deseaSalir == 'no')
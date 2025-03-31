//prompt es un texto//

//Actividad 8 --- while

let sumaEdades = 0
let cantidadEdades = 0
let pusoNegativo = false

while(pusoNegativo != true) {
    edadUusario = parseInt(prompt("Ingrese la edad de sus amigos, ponga un negativo en caso que quiera terminar"))

    if (edadUusario < 0) {
        pusoNegativo = true
    }
    sumaEdades += edadUusario
    cantidadEdades += 1
}
let promedio = sumaEdades/cantidadEdades
console.log(sumaEdades/cantidadEdades)
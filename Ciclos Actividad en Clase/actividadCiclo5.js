//Actividad 9 ---while

let digitos = prompt("Ingrese un número que desee contar los digitos")

let listaDeDigitos = digitos.split("")

console.log(listaDeDigitos)
let contador = 0

while (contador != listaDeDigitos.length) {
    contador += 1
}
console.log("Digitos", contador)
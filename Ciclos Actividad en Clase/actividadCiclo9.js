//Actividad 11 --- for
let numero = parseInt(prompt("Ingrese el número: "))
let fibonacci = [0, 1]
for (let i = 2; i < numero; i++) {
    fibonacci[i] = fibonacci[i -1] + fibonacci[i-2]
}
console.log("Los primeros numeros de: " + numero + " son: "+ fibonacci.slice(0, numero))
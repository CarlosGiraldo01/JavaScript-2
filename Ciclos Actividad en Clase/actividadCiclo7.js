// Actividad 3 --- for
let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
for(let i=1; i<10; i++) {
    console.log("Tablas de multiplicar", numeros[i])
    console.log(numeros[i] * 1)
    console.log(numeros[i] * 2)
    console.log(numeros[i] * 3)
    console.log(numeros[i] * 4)
    console.log(numeros[i] * 5)
    console.log(numeros[i] * 6)
    console.log(numeros[i] * 7)
    console.log(numeros[i] * 8)
    console.log(numeros[i] * 9)
}
//forma alterna
let numeros1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
for(let i=1; i<10; i++) 
console.log("Tablas de multiplicar", numeros[i])
for(let k=0; k<9; k++) {
    console.log(numeros[i] * numeros[k])
}

//Actividad 4 --- for
let totalNota = 0
for (let i = 0; i < 5; i++) {
    let nota = parseInt(prompt("ingrese sus cinco notas"+ i))
    totalNota += nota
}
let promedio = totalNota/5
console.log("Promedio es: "+ promedio)

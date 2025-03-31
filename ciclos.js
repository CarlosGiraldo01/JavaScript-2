//While
let contador = 1
while(contador <= 10) {
    console.log("iteración número", contador)
    contador += 1
}

//do while
let contador1 = 100
do {
    console.log("interación de while número", contador)
    contador +=1
}while(contador <100)
//ejecuta almenos una vez el ciclo

// for
for(let i=0; i<99; i++) {
    console.log("Interación for número", i)
}
console.log(i)

//for of
let nombres = ["Carlos", "Pepe", "Ana", "Luisa"]
for(const nombre of nombres) {
    console.log("Nombre: "+ nombre)
}
console.log("Estoy fuera")

//Breack
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        console.log("Se detiene en: ", i);
        breack;
    }
    console.log("Numero: ", i)
}

//Continue
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        console.log("Se salta el numero: ", i);
        continue;
    }
    console.log("Numero: ", i);
}

//
let estudiantes = [20, 18, 22, 19, 12]
let mayor = 0
for(let i = 0; i<estudiantes.length; i++) {
    if (estudiante[1] > mayor) {
        mayor = estudiantes[1]
    }
    console.log("El estudiante mayor era: ", mayor)
}
console.log("El estudiante mayor al final es: ",)
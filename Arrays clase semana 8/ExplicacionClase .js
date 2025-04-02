// Inicializacion de un arreglo
let animales = ["perro", "Gato", "Conejo", "Pez", " Aguila"];

console.log (animales);

console.log (animales[2]);
console.log (animales[3]);

console.log (animales.length);
console.log(typeof animales);

animales[0] = "Elefante"
//cambiar perro por elefante

animales.push("Ratón")

console.log(animales)

//Eliminar el ultimo animal de la lista usando pop()

animales.pop()

console.log(animales)
//Elimina al ratón

//Agregar al inicio del arreglo con unshift()
animales.unshift("León")

console.log(animales)
//agrego León al inicio de la lista

//Buscar el indice de ese elemento con IndexOf()
let IndiceDelGato = animales.indexOf("Gato")

console.log(animales[IndiceDelGato])
//Busco gato entre todos los elementos

//Determinar si un elemento esta dentro del arreglo con .includes()
console.log(animales.includes("Tortuga"))

animales.push("Tortuga")

console.log(animales.includes("Tortuga"))

console.log(animales)
//Determino si era verdadero o falso que la Tortuga esta en el arreglo

//Invertir lista con .reverse()
let AnimalesInvertidos = animales.reverse()
console.log(AnimalesInvertidos)
//Invirtio el orden de la secuencia en que estaban los animales

//Ordenar la lista con .sort()
console.log(animales.sort())
//Ordeno de forma alfabetica el orden de la lista (dando prioridad a los que tengan mayúscula)

//Eliminar un un indice especifico
animales.splice(0, 1)
console.log(animales)
//

//let animales = ("Perro", "Gato", "Conejo", "Pez", "Aguila")

let animales2 = ["Perro", "Gato", "Conejo", "Pez", "Aguila"]

animales2.splice(0,1)
console.log(encontrarGato(animales2))
animales2[0] = animales[3]
console.log(encontrarGato(animales2))
animales2.pop()
animales2.push("León")

console.log(animales2)
//Lista resultante que tenga los elementos = ["Aguila","Conejo", "Pez", "León"]


function encontrarGato(lista) {
    let result = lista.includes("Gato")
    return result
}
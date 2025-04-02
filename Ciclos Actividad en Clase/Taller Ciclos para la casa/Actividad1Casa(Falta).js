let inicio = 1;
let fin = 10
let random = inicio + Math.floor(Math.random() * (fin - inicio + 1));
let numero = null
let respuesta = "";

while(numero !== random) {
    numero = parseInt(prompt("Ingresa un numero: "));

    if(numero === random) {
        respuesta = ("El numero es el mismo!")
    }else if(numero < random) {
        respuesta = ("El numero es menor que el generado")
    }else if(numero > random) {
        respuesta = ("El numero es mayor que el generado")
    }
    console.log(respuesta);
}
console.log(respuesta, " El numero generado fue: ", random);
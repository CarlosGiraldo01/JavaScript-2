let inicio = 1;
let fin = 10;
let random = inicio + Math.floor(Math.random() * (fin - inicio) + 1 );
let número;
let respuesta = "";

while(número !== random) {
    número = (" Ingrese un número del '1' al '10' ")

    if(número < random) {
    respuesta = ("Tu número es menor que el generado")
    }
    else if(número > random) {
    respuesta = ("Tu número es mayor que el generado")
    }
    else if(número === random) {
    respuesta = ("Acertaste el número")
    }
    console.log(respuesta);
}
console.log(respuesta, " el número generado fue: ", random);
//while do (acciona y luego pregunta)
//while (pregunta y luego acciona)

// Actividad 2 --- while
let contador = 10
while(contador != 1) {
    contador-=1
    console.log(contador)

    if (contador == 1) {
        console.log("Terminé")
    }
}
// Actividad 2 --- do while (quitar 1 y borrar el de arriba para funcionar)
let contador1 = 2
do {
    contador -= 1
    console.log(contador)
    if (contador == 1) {
        console.log("Terminé")
    }
}while (contador != 1)
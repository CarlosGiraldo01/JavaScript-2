let numeroSecreto = Math.floor(Math.random() * 10) +1;

console.log(numeroSecreto);
let adivino = false;

while(adivino === false) {
    let numero = prompt("Adivina el numero entre el 1 al 10: ");
    numero = parseInt(numero);
    if (numero === numeroSecreto) {
        alert("Felicidades, acertaste el número");
        adivino = true;
    }else if (numero < numeroSecreto) {
        alert("El numero es mayor, intente denuevo.");
    }else if (numero > numeroSecreto) {
        alert ("El numero es menor, intente denuevo.");
    }
}
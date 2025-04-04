let numeroSecreto = Math.floor(Math.random() * 50) +1; 
console.log(numeroSecreto);
let adivino = false;
do {
    let numero = parseInt(prompt("Adivina el numero entre 1 y 50: "));
    if (numero === numeroSecreto) {
        alert("Felicidades, adivinaste el numero")
        adivino = true
    } else if (numero < numeroSecreto) {
        alert("El numero es mayor, intentelo denuevo")
    } else if (numero > numeroSecreto) {
        alert("El numero es menor, intente denuevo")
    }
    adivino = true
} while (adivino == false);
console.log("Salí")

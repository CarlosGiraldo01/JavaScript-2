let frase = prompt("Ingresa una frase");
console.log(frase)

let vocales = ["a", "e", "i", "o", "u"];

let contador = 0
let NumeroVocales = 0;
while(contador < frase.length) {
    console.log(frase[contador]);
    if(vocales.includes(frase[contador])) {
        NumeroVocales = NumeroVocales +1;
    }
    contador++;
}
console.log("El numero de voclaes en la frase es de: " + NumeroVocales);
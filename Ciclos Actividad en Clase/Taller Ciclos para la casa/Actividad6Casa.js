let contador = 0;
let numero;

do {
    numero = parseInt(prompt("Ingrese un número"));
    if (numero >= 0) {
        contador++;
    }
} while(numero >= 0); 
console.log("Has ingresado", contador, "números positivos" )
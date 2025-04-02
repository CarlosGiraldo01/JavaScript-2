let numero = parseInt(prompt("Ingresa un número positivo:"));

if (numero < 0) {
  console.log("Por favor, ingresa un número positivo.");
} else {
  let sumaDigitos = 0;

  while (numero > 0) {
    let digito = numero % 10;
    sumaDigitos += digito;
    numero = Math.floor(numero / 10);
  }

  console.log("La suma de los dígitos es: " + sumaDigitos);
}
let numero = parseInt(prompt("Ingrese un número"));
let resultado = 1;
for (let i = 1; i <= numero ; i++) {
    resultado *= i;
}
console.log("El factorial de ", numero, "es: ", resultado)
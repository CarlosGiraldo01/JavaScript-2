let frutas = ["manzana", "pera", "uva", "piña", "durazno", "melon"]
console.log(frutas);
console.log("Largo: ", frutas.length);

//esto no seria necesario con for of//
for (let i = 0; i < frutas.length; i++) {

    fruta = frutas[i];
    console.log(fruta);
}
//con for of//
for (const fruta of frutas) {
    console.log(fruta)
}
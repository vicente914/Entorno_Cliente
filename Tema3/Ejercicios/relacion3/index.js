//Ejercicio básicos de arrays

let frutas = ["Fresa", "Manzana", "Pera", "Naranja", "CheeseBurguer"];
let numeros = [1, 2, 3, 4, 20, 10, 15, 2, 2, 30];


//Encontrar el numero mas grande
let maxNumero = Math.max(...numeros);

//Encontrar el string mas largo
let stringMasLargo = frutas.reduce((masLargo, actual) => {
    return actual.length > masLargo.length? actual : masLargo;
});


//Encontrar numeros pares
let numPares = numeros.filter( x => x % 2 === 0);

//Encontrar numeros impares
let numImpares = numeros.filter( x => x % 2 !== 0);


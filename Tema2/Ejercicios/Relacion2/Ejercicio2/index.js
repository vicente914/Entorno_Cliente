//Ejercicio 2

//Generamos un número aleatorio entre 0 y 1
console.log(Math.random());

//Recreamos un dado
console.log(Math.floor(Math.random() * 6) + 1);

//Generamos un número aleatorio en un rango recibido
function numAleatorio(min, max){
    console.log(Math.floor(Math.random() * (max - min + 1)) + min);
}

console.log(numAleatorio(5, 10));
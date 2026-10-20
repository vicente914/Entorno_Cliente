//Ejercicio básicos de arrays

let frutas = ["Fresa", "Manzana", "Pera", "Naranja", "CheeseBurguer", "isBanana"];
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


//Palabras que contengan "is"
let palabrasIs = frutas.filter(x => x.includes("is"));

//Comprobamos que todos los numeros sean divisibles entre 3
let divisiblesEnTres = numeros.every(x => x % 3 === 0);

//Unimos dos arrays 
let fusion = frutas.concat(numeros);

//Ordenamos la fusion de arrays
let fusionOrdenado = fusion.sort((a,b) => {
    let respuesta;
    const aNumero = typeof a === "number";
    const bNumero = typeof b === "number";

    if(aNumero && bNumero){
        respuesta = a - b;
    }
    else if(aNumero){
        respuesta = -1;
    }
    else if(bNumero){
        respuesta = 1;
    }
    else{
        respuesta = a.localeCompare(b);
    }
    return respuesta;
});



//Borramos la primera palabra del array
frutas.shift();


//Añadimos una nueva palabra al principio del array
frutas.unshift("Mango");


//Reemplazamos algunos elementos del array

frutas.splice(2, 2, "Hola", "Adios"); 
//Primer numero para indicar desde que indice empieza
//Segundo número para indicar cuantos indices reemplaza




let nombres = ['Vicente', 'Gabriel', 'Alvaro', 'Jesus', 'Pablo'];

let nombresConJ = nombres.filter(x => x.startsWith("J"));

let nombresInicialOrdenados = nombres.map(x => x.substring(0,1)).sort((a, b) => a.localeCompare(b));


//Busqueda del tesoro


//Ejercicios
//Ejercicio1
/*
let sum = ((num1, num2) => num1+num2)

console.log("the answer to everything is", sum(5,10));





//Ejercicio2

let longestCityNameInTheWorld = "Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu"

const stringLength = str => str.length;
console.log(stringLength(longestCityNameInTheWorld));
*/

//Ejercicio3
function stringLength(str){
    let length = str.length
    console.log(`the length of "${str}" is:`, length)
    return str.length
}

const stringLength = str => str.length;
stringLength("willynilly")



const saludar = (nombre, edad) => `Hola, soy ${nombre}, y tengo ${edad} años.`;

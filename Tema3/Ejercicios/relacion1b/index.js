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
/*
function stringLength(str){
    let length = str.length
    console.log(`the length of "${str}" is:`, length)
    return str.length
}
*/

/*
const stringLength = str => str.length;

const saludar = (nombre, edad) => `Hola, soy ${nombre}, y tengo ${edad} años.`;

//Ejercicio 4
let alerts = ["Hey, you are awesome", "You are so wonderful", "What a marvel you are", "You're so lovely", "You're so sweet that I'd think you're a sweet potato -- and I LOOOOVE POTATOES"];

const showAlert = name => alert(alerts[(Math.floor(Math.random()*alerts.length))] + `, ${name}!`);

showAlert("you ball of fluff");
*/

//Ejercicio 5

const saludar = (nombre, edad) => `Hello, I am ${nombre} and I am ${edad} years old.`;

//Ejercicio 6

const reducirArray = arr => arr.reduce((acum, i) => acum + i, 0);

//Ejercicio 7
let eye = "eye";

const fire =() => `bulls-`;

//Ejercicio 8
const fibonacci = n => {
        if (n < 3) return 1; 
        return fibonacci(n - 1) + fibonacci(n - 2);
    }

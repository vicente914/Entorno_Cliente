//Ejercicio básicos de arrays

let frutas = ["Fresa", "Manzana", "Pera", "Naranja", "CheeseBurguer"];


frutas.push("Hola");//añade al final del array
frutas.pop();//borra el ultimo elemento del array
frutas.unshift("Limon");
frutas.shift();

//Recorremos elarray
for(fruta of frutas){
    console.log(fruta);
}


//concatenacion de arrays
let carne = ["vaca", "cerdo", "pollo"];

let comida = frutas.concat(carne);
let comida1 = [...frutas, ...carne];


//Ejercicios intermedios arrays

let numeros = [1, 2, 3, 4, 5];
let numerosDuplicados = numeros.map(i => i*2);

let paresFiltrados = numeros.filter(i => i % 2 === 0);

let numerosSumados = numeros.reduce((result, i) => result + i, 0);

let numerosTexto = numeros.join(", ");
console.log(numerosTexto);

let texto = 'Hola me llamo Vicente';
let arrayTexto = texto.split();
console.log(arrayTexto);

//Ejercicio avanzados de array

let numeros1 = [1, 2, 3, 1, 4, 5, 6, 6, 6];

let numeros1SinDuplicados = numeros1.filter((x, i) => numeros1.indexOf(x) === i );
console.log(numeros1SinDuplicados);


let maxNumeros1 = Math.max(...numeros1);
let minNumeros1 = Math.min(...numeros1);
console.log(`Numero maximo: ${maxNumeros1}`);
console.log(`Numero minimo: ${minNumeros1}`);


let array2D = [[1,2,3], [4,5,6], [7,8,9]];
let arrayPlano = array2D.flat();



let nombres = ['Vicente', 'Mateo', 'Alvaro', 'Dylan', 'Vicente'];

let contadorVicente = 0;
nombres.forEach((x) => {
    if(x === 'Vicente'){
        contadorVicente += 1;
    }
});


const personas = [
  { nombre: "Ana", edad: 23 },
  { nombre: "Luis", edad: 30 }
];
// Resultado esperado: ["Ana", "Luis"]
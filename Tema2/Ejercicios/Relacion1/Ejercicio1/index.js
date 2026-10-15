//Relacion1

//Ejercicio 1, Conversión y propiedades básicas
//Conversión de cadena a numeros

let cadena1 = "123";
let cadena2 = "3.14";
let cadena3 = "abc";

let numero1 = Number(cadena1);
let numero2 = parseInt(cadena2);
let numero3 = parseFloat(cadena3);

console.log(numero1, typeof(numero1));//Convierte la cadena en number estrictamente y devuelve NaN si contiene caracteres
console.log(numero2, typeof(numero2));// Hace lo mismo que Number, pero es mas permisivo, comprueba solo si 
//el primer caracter es un numero para transformar la cadena en un int

console.log(numero3, typeof(numero3));//se comporta igual que parseInt, pero con decimales


//Funcion que comprueba si el valor pasado es un entero o no
function isInt(num1){
    esEntero = false;
    if(Number.isInteger(num1)){
        esEntero = true;
    }
    return esEntero;
}
console.log("");
console.log("Comprobaciones");
//Number.isNaN() devuelve true o false dependiendo si el valor introducido es de tipo NaN
console.log(Number.isNaN(NaN));
console.log(Number.isNaN("Hello")); //Es string, no es NaN
console.log(Number.isNaN(undefined)); //es undefined, no es NaN
console.log(Number.isNaN(0/0)); //Devuelve NaN, porque la división de 0/0 es una indeterminada
//no existe un unico valor correcto, hay infinitos valores correctos, y javascript maneja esto
//dandole valor NaN
console.log(Number.isNaN(parseInt("abc")));//Devuelve true, porque el parseInt de una cadena como "abc"
//devuelve NaN, dando true como resultado


console.log(Number.isFinite(1/0));//Devuelve false, porque el resultado de 1/0 crece infinitamente
//acercando su divisor a 0
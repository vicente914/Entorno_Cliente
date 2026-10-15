// Ejercicio 1


//Funcion que recibe un número y devuelve su valor absolutos
function valorAbsoluto(num){
    console.log(Math.abs(num));
}

//Pedimos al usuario un numero decimal y lo 
//muestra redondeado de distintas formas
/*
let num = Number(prompt("Introduce un número"));
console.log(`Redondeado con Math.round: ${Math.round(num)}`);
console.log(`Redondeado con Math.ceil: ${Math.ceil(num)}`);//Rendondea tirando hacia arriba
console.log(`Redondeado con Math.floor: ${Math.floor(num)}`);//Redondea tirando hacia abajo
*/

//Calculamos potencia y raíces
console.log(`5 elevado a 3 es igual a ${Math.pow(5, 3)}`);
console.log(`La raíz cuadrada de 81 es ${Math.sqrt(81)}`);

//Valor máximo y valor mínimo

let numeros = [10, -5, 3, 99, 42];
console.log(`El valor máximo de nuestro array ${numeros} es ${Math.max(...numeros)}`);
console.log(`El valor máximo de nuestro array ${numeros} es ${Math.min(...numeros)}`);
//Math.max y Math.min no aceptan arrays de valores, necesitan recibir un parametro en concreto 
//para funcionar
//Por lo que si queremos que no diga cual es el mayor y el menor
//tendremos que utilizar el operador de propagación(spread operator)
//que hará que Math.max iterar el array y ver cada valor que contiene.

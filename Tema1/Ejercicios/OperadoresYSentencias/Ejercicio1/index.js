//Ejercicio 1
//Practicando operadores, expresiones, condicionales y bucles usando setencias simples
/*
//Apartado 1
let num1 = Number(prompt("Ingrese el primer número"));
let num2 = Number(prompt("Ingrese el segundo número"));

console.log(`Suma: `,num1+num2);
console.log(`Resta: `,num1-num2);
console.log(`Multiplicacion: `,num1*num2);
console.log(`Division: `,num1/num2);


//Ejercicio 2
//Programa que pide un número y dice si es par o impar
let numero = Number(prompt(`Ingrese un número`));

if(numero % 2 === 0){
    console.log("El número es par");
}
else{
    console.log("El número es impar");
}


//Ejercicio 3
//Programa que pide al usuario 3 números distintos y determina cual es el mayor
// de los 3

let a = Number(prompt("Número 1"));
let b = Number(prompt("Número 2"));
let c = Number(prompt("Número 3"));

if(a > b && a > c){
    console.log(`${a} es el número más grande`);
}
else if(b > a && b > c){
    console.log(`${b} es el número más grande`);
}
else if(a == b && a == c){
    console.log(`Todos son iguales`);
}
else{
    console.log(`${c} es el número más grande`);
}


//Ejercicio 4
//Programa que pide un número y muestra su tabla de multiplicar
// del 1 al 10

let num = Number(prompt("Ingrese un número"));

for(let i = 1; i <= 10; i++){
    console.log(`Multiplicado por ${i}: `,num*i);
}
num = 0;



//Ejercicio 5
//Programa que recibe un número N y muestra la suma de todos los números
//hasta dicho número

let N = Number(prompt("Introduce un número"))

let resultado = 0;
for(let i = 0 ; i <= N; i++){
    resultado += i;
}

console.log(`La sumatoria de ${N} es ${resultado}`);





//Ejercicio 6
//Programa que pide y recibe 5 números y cuenta 
// cuantos son positivos y cuantos son negativos

let positivos = 0;
let negativos = 0;

for(let i = 0; i < 5; i++){
    let num = Number(prompt(`Ingrese el número ${i+1}`));
    if(num > 0){
        positivos++;
    }
    else if(num < 0){
        negativos++;
    }
    else{
        console.log("No has introducido ni un negativo ni un positivo");
    }
}

console.log(`Números positivos: ${positivos}`);
console.log(`Números negativos: ${negativos}`);


//Ejercicio 7
//Programa que pide un número y dice si primo o no
let num = Number(prompt("Ingrese un número"));
let divisores = 0;

for(let i = 1; i <= num; i++){
    if(num % i === 0 && num > 1){
        divisores++;
    }
}
console.log(`Divisores: ${divisores}`);
(divisores === 2)?console.log(`Es primo`):console.log("No es primo");




//Ejercicio 8
//Programa que pide un número y calcula su factorial usando
// un bucle for

let numero = Number(prompt("Ingrese un número"));
let factorial = 1;

for(let i = 1; i <= numero; i++){
    factorial *= i;
}

console.log(`El factorial de ${numero} es ${factorial}`);


//Ejercicio 9
//Programa que pide un número N e imprime todos los números pares
//desde 1 hasta N

let N = Number(prompt(`Ingrese un número`));
for(let i = 0; i <= N; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}



//Ejercicio 10
//Programa que genera un número aleatorio entre 1 y 10
//el usuario trata de adivinar el número
//el programa da pistas diciendo si el número que busca es mayor o menor
let numeroSecreto = Math.floor(Math.random() * 10 )+1;
let intento;

while(intento !== numeroSecreto){
    intento = Number(prompt(`Adivina el número del 1 al 10`));
    if(intento < numeroSecreto){
        alert('El número que buscas es mayor');
    }
    else if(intento > numeroSecreto){
        alert(`El número que buscas es menor`)
    }
    else{
        alert("Has ganado!");
    }
}
*/
//Ejercicio 2
//Mostramos el siguiente numero con 2, 4 y 6 decimales usando .toFixed
console.log("Mostrando el numero con decimales");
let num1 = 3.141592;
console.log(num1.toFixed(2));
console.log(num1.toFixed(4));
console.log(num1.toFixed(6));


//Convertimos el siguiente numero a notación cientifica con .toExponential()
console.log("");
console.log("Exponencial");
let num2 = 123456;
console.log(num2.toExponential(2));

//Convertimos el siguiente numero a binario, octal y hexadecimal usando .toString(base)
console.log("");
console.log("Pasando a distintas bases");
let num3 = 255;

console.log(num3.toString(2));//Base binaria
console.log(num3.toString(8));//Base octal
console.log(num3.toString(16));//Base hexadecimal


//Usamos .toPrecision para representar el siguiente número con 4 y 7 cifras
//significativas
console.log("");
console.log("Cifras significativas");
let num4 = 123.456789;
console.log(num4.toPrecision(4));
console.log(num4.toPrecision(7));
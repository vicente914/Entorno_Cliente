//Ejercicio 1
//Programa que pide edad y si tiene permiso de sus padre al usuario
//si ambas condiciones se cumplen, se determina que el usuario
//puede seguir
/*
let edad = Number(prompt("Ingrese su edad"));
let permiso = prompt("¿Tiene permiso de sus padres? (sí/no)");

if(edad >= 18 && permiso.toLowerCase() === 'si'){
    console.log('El usuario puede entrar');
}
else{
    console.log('Acceso restringido');
}



//Ejercicio 2
//Pregunta si el usuario/alumno aprobó tres materias distintas
//si el alumno aprobó solo una, ya puede pasar

let matematicas = prompt("¿Aprobó matemáticas? (sí/no)");
let fisica = prompt("¿Aprobó física? (sí/no)");
let quimica = prompt("¿Aprobó química? (sí/no)");

if(matematicas.toLowerCase() == 'si' || fisica.toLowerCase() == 'si' || quimica.toLowerCase() == 'si'){
    console.log("Pasa al siguiente nivel");
}
else{
    console.log("El alumno no puede pasar al siguiente nivel");
}



//Ejercicio 3
//Pide al usuario una contraseña, si no es correcta, muestra un mensaje de error
contraseñaSegura = "contraseñaMuySegura";
let contraseña = prompt("Ingrese la contraseña");

if(contraseña != contraseñaSegura){
    console.log("Contraseña incorrecta");
}
else{
    console.log("Contraseña correcta, puede continuar");
}



//Ejercicio 4
//El programa pide un número y verifica si esta entre 10 y 50
let numero = Number(prompt("Ingrese un número"));

if(numero >= 10 && numero <= 50){
    console.log(`El número ${numero} SI se encuentra en el rango entre 10 y 50`);
}
else{
    console.log("El número introducido no esta en el rango de 10 a 50");
}




//Ejercicio 5
//Programa que pide la edad del usuario y si tiene tutor
//si tiene tutor o tiene 18 en adelante, puede entrar

let edad = Number(prompt("Ingrese su edad"));
let tutor = prompt("¿Tiene tutor presente? (sí/no)");
if(edad >= 18 || tutor.toLowerCase() == "si"){
    console.log("Puede pasar");
}
else{
    console.log("NO puede pasar");
}





//Ejercicio 6
//Programa que pide usuario y contraseña
// si el usuario es admin y la contraseña 1234, puede pasar
// si el usuario es invitado, no necesita contraseña

let usuario = prompt("Ingrese su usuario");
let contraseña = prompt("Ingrese su contraseña");

if((usuario == "admin" && contraseña == "1234") || usuario == "invitado"){
    console.log("Acceso válido");
}
else{
    console.log("Acceso restringido");
}



//Ejercicio 7
//Programa que pide un número y te confirma si es positivo
// y menor que 100

let numero = Number(prompt("Ingrese un número"));

if(numero >= 1 && numero < 100){
    console.log(`${numero} es positivo y menor que 100`);
}
else{
    console.log(`${numero} no se encuentra dentro del rango positivo y menor que 100`);
}




//Ejercicio 8
//Programa que pide un dia de la semana y devuelve si es 
// dia laborable o no (lunes a viernes)

let dia = prompt("Ingrese un día de la semana");

if(dia.toLowerCase() == "lunes" || dia.toLowerCase() == "martes" || dia.toLocaleLowerCase() == "miercoles" || dia.toLocaleLowerCase() == "jueves" || dia.toLocaleLowerCase() == "viernes"){
    console.log(`${dia} es un día laborable`);
}
else{
    console.log(`${dia} NO es un día laborable`);
}



//Ejercicio 9
//Programa que pide edad y nacionalidad del votante
// si tiene 18 años o mas y es ciudadano del pais, puede votar

let edad = Number(prompt("Ingrese su edad"));
let nacionalidad = prompt("Ingrese su nacionalidad");

if(edad >= 18 && nacionalidad.toLocaleLowerCase() == "español"){
    console.log("Puede votar");
}
else{
    console.log("NO puede votar");
}
    */


//Ejercicio 10
let usuario, contraseña;

while (!(usuario === "admin" && contraseña === "1234")) {
    usuario = prompt("Usuario:");
    contraseña = prompt("Contraseña:");
    if(!(usuario === "admin" && contraseña === "1234"))
        alert("ACCESO DENEGADO: USUARIO O CONTRASEÑA INCORRECTOS");
}
console.log("¡Acceso permitido!");

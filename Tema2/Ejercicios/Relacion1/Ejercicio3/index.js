//Ejercicio 3
//Validador de números

function validarNum(num){
    let esValido = true;
    if(Number.isNaN(num)){
        esValido = false;
    }
    return esValido;

}
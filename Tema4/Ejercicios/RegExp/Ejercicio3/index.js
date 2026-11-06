//Comprobador nombre de usuario
const username = document.getElementById("username");
const min = document.getElementById("min");
const mayus = document.getElementById("mayus");
const minCarac = document.getElementById("minCarac");

username.addEventListener("input", ()=>{

    const medidorMinuscula = new RegExp("[a-z]");
    const medidorMayuscula = new RegExp("[A-Z]");
    let texto = username.value;

    //Medidor para la letra minuscula
    if(medidorMinuscula.test(texto)){
        min.style.color = "green";
    }
    else{
        min.style.color = "red";
    }

    //Medidor para la letra mayuscula
    if(medidorMayuscula.test(texto)){
        mayus.style.color = "green";
    }
    else{
        mayus.style.color = "red";
    }
    
    //Medidor para el mínimo de caracteres
    if(texto.length >= 6){
        minCarac.style.color = "green";
    }
    else{
        minCarac.style.color = "red";
    }
});
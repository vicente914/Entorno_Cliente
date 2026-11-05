//Trabajando expresiones regulares
const probarTexto = document.getElementById("probarTexto");
const comprobarMayus = document.getElementById("comprobarMayus");
const resultadoMayus = document.getElementById("resultadoMayus");


comprobarMayus.addEventListener("click", () => {
    const expReg = new RegExp("[A-Z]");
    let texto = probarTexto.value;

    
    if (expReg.test(texto)){
        resultadoMayus.textContent = 'Correcto';
        resultadoMayus.style.color = "green";
    } 
    else{
        resultadoMayus.textContent = 'Incorrecto';
        resultadoMayus.style.color = "red";
    }
});


const probarEspec = document.getElementById("probarEspec");
const comprobarEspec = document.getElementById("comprobarEspec");
const resultadoEspec = document.getElementById("resultadoEspec");

comprobarEspec.addEventListener("click", () => {
    const expReg = new RegExp("[!@#\$%\^&]");
    let texto = probarEspec.value;

    
    if (expReg.test(texto)){
        resultadoEspec.textContent = 'Correcto';
        resultadoEspec.style.color = "green";
    } 
    else{
        resultadoEspec.textContent = 'Incorrecto';
        resultadoEspec.style.color = "red";
    }
});

const probarCorreo = document.getElementById("probarCorreo");
const comprobarCorreo = document.getElementById("comprobarCorreo");
const resultadoCorreo = document.getElementById("resultadoCorreo");

comprobarCorreo.addEventListener("click", () => {
    const expReg = new RegExp("^[a-zA-Z0-9._%+-]{1,}@[a-zA-Z0-9.-]{1,}\.[a-zA-Z]{2,}$");
    let texto = probarCorreo.value;

    
    if (expReg.test(texto)){
        resultadoCorreo.textContent = 'Correcto';
        resultadoCorreo.style.color = "green";
    } 
    else{
        resultadoCorreo.textContent = 'Incorrecto';
        resultadoCorreo.style.color = "red";
    }
});

const probarTarjeta = document.getElementById("probarTarjeta");
const comprobarTarjeta = document.getElementById("comprobarTarjeta");
const resultadoTarjeta = document.getElementById("resultadoTarjeta");

//Mastercard
comprobarTarjeta.addEventListener("click", () => {
   const expReg = new RegExp("^(5[1-5][0-9]{14}|2(2[2-9][0-9]{2}|[3-6][0-9]{3}|7[01][0-9]{2}|720[0-9]{2})[0-9]{11})$");   
    let texto = probarTarjeta.value;

    
    if (expReg.test(texto)){
        resultadoTarjeta.textContent = 'Correcto';
        resultadoTarjeta.style.color = "green";
    } 
    else{
        resultadoTarjeta.textContent = 'Incorrecto';
        resultadoTarjeta.style.color = "red";
    }
});


const probarLongitud = document.getElementById("probarLongitud");
const comprobarLongitud = document.getElementById("comprobarLongitud");
const resultadoLongitud = document.getElementById("resultadoLongitud");

//Mastercard
comprobarLongitud.addEventListener("click", () => {
   const expReg = new RegExp("[a-zA-Z0-9!@#\$%\^&]{8,}");   
    let texto = probarLongitud.value;

    
    if (expReg.test(texto)){
        resultadoLongitud.textContent = 'Correcto';
        resultadoLongitud.style.color = "green";
    } 
    else{
        resultadoLongitud.textContent = 'Incorrecto';
        resultadoLongitud.style.color = "red";
    }
});


const probarNumero = document.getElementById("probarNumero");
const comprobarNumero = document.getElementById("comprobarNumero");
const resultadoNumero = document.getElementById("resultadoNumero");

//Mastercard
comprobarNumero.addEventListener("click", () => {
   const expReg = new RegExp("[0-9]{1,}");   
    let texto = probarNumero.value;

    
    if (expReg.test(texto)){
        resultadoNumero.textContent = 'Correcto';
        resultadoNumero.style.color = "green";
    } 
    else{
        resultadoNumero.textContent = 'Incorrecto';
        resultadoNumero.style.color = "red";
    }
});
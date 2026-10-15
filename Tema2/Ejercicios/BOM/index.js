//BOM
//Información del navegador
const navegador = document.getElementById("navegador").innerHTML = "Navegador: " + navigator.appName+navigator.product+navigator.appVersion;
const idioma = document.getElementById("idioma").innerHTML = "Idioma: "+navigator.language;
const plataforma = document.getElementById("plataforma").innerHTML = "Plataforma: "+navigator.platform;
const resolucion = document.getElementById("resolucion").innerHTML = "Resolución: "+screen.width+"x"+screen.height;


//Navegación
const urlActual = document.getElementById("urlActual").innerHTML = "URL actual: "+window.location.href;

//Redirección
const urlW3 = document.getElementById("urlW3");
urlW3.innerHTML = "Ir a W3schools.com "

urlW3.addEventListener("click", () =>{
    window.location.assign("https://www.w3schools.com");
});

//Informacion de la pantalla
const resolucionTotal = document.getElementById("resolucionTotal").innerHTML = "Resolución total: "+screen.width+"x"+screen.height;
const areaDisponible = document.getElementById("areaDisponible").innerHTML = "Área disponible: "+screen.availWidth+"x"+screen.availHeight;
const orientacion = document.getElementById("orientacion").innerHTML = "Orientación: "+screen.orientation;
const profundidadColor = document.getElementById("profundidadColor").innerHTML = "Profundidad de color: "+screen.colorDepth;
const profundidadPixel = document.getElementById("profundidadPixel").innerHTML = "Profundidad de píxel: "+screen.pixelDepth

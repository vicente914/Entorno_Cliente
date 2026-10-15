//Cookies
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

let nombreUsuario;

function elegirRojo(){
    document.cookie = "colorFondo = red";
    document.body.style.backgroundColor = "red";
}

function elegirVerde(){
    document.cookie = "colorFondo = green";
    document.body.style.backgroundColor = "green";
}


var nombreMostrar="";
nombreMostrar = getCookie("nombre");

if(!nombreMostrar){
    nombreUsuario = prompt("Dime tu nombre");
    document.cookie = "nombre = "+nombreUsuario;
    nombreMostrar = nombreUsuario;
}

document.getElementById("bienvenida").innerHTML = "Bienvenido "+nombreUsuario;

//Comprobamos si el usuario elejio algun color de fondo

let bgColor = getCookie("colorFondo");
if(bgColor)
    document.body.style.backgroundColor = getCookie("colorFondo");



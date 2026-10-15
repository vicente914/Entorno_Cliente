//Cookies

//Ejercicio 1 y 2
document.cookie = "nombre = Vicente";
document.cookie = "edad = 18";
document.cookie = "ciudad = Granada";
//1.-¿Cómo aparecen separadas las diferentes cookies?
//Aparecen separadas como cookies distintas con valores distintos


//¿Se muestran en el mismo orden en el que las has creado?
//Se muestran por orden de creación, la ultima cookie en ser creada, o cada cookie nueva
//aparece arriba como la primera

//¿Qué ocurre si vuelves a cargar la página?
//Las cookies siguen guardadas y no desaparecen


//Ejercicio 3
document.cookie = "nombre = Juan";
document.cookie = "nombre = Pedro";

//Cuandro creamos una cookie utilizando un nombre que ya existe,
//la cookie mas reciente machaca a las anteriores y se guarda el ultimo valor asignado

//Ejercicio 4
document.cookie = "usuario = Vicente";

//La cookie sigue existiendo por mas que cerremos la pestaña o el navegador por completo
//esto es algo que nuestra máquina guarda como dato y ese dato no desaparece a menos que
//la cookie caduque o la borremos nosotros mismos.

//Ejercicio 5
document.cookie = "nombre=Juan";
document.cookie = "edad=25";
document.cookie = "ciudad=Granada";

let datos = document.cookie;
dato = datos.split("; ");//colocamos espacio despues de ';' para que así no genere el array con un espacio
                        // añadido al principio de cada nombre de cookie a partir de la posicion 1
console.log(dato);


//Ejercicio 6
let valor;
function obtenerCookie(nombre){
    valor = '';
    for(let i = 0; i < dato.length; i++){
        cookieNombre = dato[i].split('=');
        if(nombre == cookieNombre[0]){
            valor = cookieNombre[1];
        }
    }
    if(valor = ''){
        valor = null;
    }
    return valor;
}

//console.log(dato[0].split('='));


/*
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
  */
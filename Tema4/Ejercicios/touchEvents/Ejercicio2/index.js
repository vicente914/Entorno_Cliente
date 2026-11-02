//Circulo perseguidor
const circulo = document.getElementById("circulo");

circulo.addEventListener("touchmove", (e)=>{
    let toque = e.touches[0];

    //Se le resta 100(en el css tenemos 200 en ancho y alto) para que el centro quede en el dedo
    const posicionX = toque.clientX - 100;
    const posicionY = toque.clientY - 100;


    //le asignamos la posicion restada a nuestro circulo
    circulo.style.left = posicionX + "px";
    circulo.style.top = posicionY + "px";

});
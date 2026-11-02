//Contenedor sensible
const contenedorSensible = document.getElementById("contenedorSensible");


contenedorSensible.addEventListener("touchstart", (e) =>{
    contenedorSensible.style.backgroundColor = "green";

    //muestra las coordenadas
    let toque = e.touches[0];
    contenedorSensible.innerHTML = `<p>X:${toque.pageX}</p> <p>Y:${toque.pageY}</p>`;
});

contenedorSensible.addEventListener("touchmove", (e)=>{
    contenedorSensible.style.backgroundColor = "yellow";

    //actualiza las coordenadas segun movemos el cursor
    let toque = e.touches[0];
    contenedorSensible.innerHTML = `<p>X:${toque.pageX}</p> <p>Y:${toque.pageY}</p>`;
});

contenedorSensible.addEventListener("touchend", ()=>{
    contenedorSensible.style.backgroundColor = "red";
});





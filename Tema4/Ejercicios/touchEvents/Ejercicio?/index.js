let caja = document.getElementById("caja");
var offsetX, offsetY;

caja.addEventListener("touchstart", (e)=>{
    e.preventDefault();
    console.log("tocamos el div");
    caja.style.backgroundColor = "red";

    offsetX = e.touches[0].clientX - caja.offsetLeft;
    offsetY = e.touches[0].clientY - caja.offsetTop;
});

caja.addEventListener("touchend", (e)=>{
    e.preventDefault();
    console.log("levantas el dedo del div");
    caja.style.backgroundColor = "violet";
});

window.addEventListener("touchmove", (e)=>{
    let toque = e.touches[0];
    let x = toque.clientX;
    let y = toque.clientY;
    console.log(`X = ${x} Y = ${y}`);
});

caja.addEventListener("touchmove", (e) =>{
    let toque = e.touches[0];
    let x = toque.clientX;
    let y = toque.clientY;

    
    caja.style.left = `${x-offsetX}px`;
    caja.style.top = `${y-offsetY}px`;
});



//DETECTAR GESTOS
const caja2 = getElementById("caja2");
let startX = 0;
let startY = 0;

caja2.addEventListener("touchstart" , (e) =>{
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
});

caja2.addEventListener("touchend", (e)=>{
    let endX = e.changedTouches[0]
});
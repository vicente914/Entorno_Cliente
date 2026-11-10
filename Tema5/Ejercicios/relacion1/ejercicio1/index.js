//STOPWATCH
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
const timer = document.getElementById("timer");

const inicio = Date.now();
let minutos;
let segundos;

let tempInicial = document.createElement("h3");
timer.appendChild(tempInicial);


setInterval(()=>{
    let transcurridos = Date.now() - inicio;
    totalSegundos = Math.floor(transcurridos / 1000);

    minutos = Math.floor(totalSegundos / 60);
    segundos = totalSegundos % 60 //Cuando llegue a 60 vuelve a 1
    tempInicial.innerHTML = `${String(minutos).padStart(2, "0")} : ${String(segundos).padStart(2, "0")}`;

}, 1000);
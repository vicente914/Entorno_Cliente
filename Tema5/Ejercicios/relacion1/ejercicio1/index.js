//STOPWATCH
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
const timer = document.getElementById("timer");


let minutos = 0;
let segundos = 0;
let intervalId = null;
let inicio = null;
let acumulado = 0;//Inicializamos acumulado a 0 para que luego sume bien lo que ya tiene el timer

//Creamos con DOM un h3 que contiene el tiempo y lo insertamos en el div timer
let tempInicial = document.createElement("h3");

tempInicial.innerHTML = '00:00'
timer.appendChild(tempInicial);

//FUNCIONALIDADES DEL TIMER

//Avanzar minutos y segundos
function startWatch(){
    if(intervalId !== null) return; //Si ya esta iniciado, no lo lanza otra vez

    inicio = Date.now();

    intervalId = setInterval(()=>{
    let transcurridos = acumulado + (Date.now() - inicio);//sumamos acumulado, si no hay un timer empezado
    //suma 0 y empieza de 0 normalmente, si el timer habia sido pausado, le suma lo acumulado para que prosiga
    //por donde lo dejo

    totalSegundos = Math.floor(transcurridos / 1000);
    minutos = Math.floor(totalSegundos / 60);
    segundos = totalSegundos % 60 //Cuando llegue a 60 vuelve a 1
    tempInicial.innerHTML = `${String(minutos).padStart(2, "0")}:${String(segundos).padStart(2, "0")}`;
    }, 100); 
}

//Detener el timer 
function stopWatch(){
    if(intervalId === null) return;// si ya esta parado, no lo lanza otra vez
    acumulado = acumulado + (Date.now() - inicio);
    clearInterval(intervalId);
    intervalId = null;
    inicio = null;   
}

//Resetear el timer
function resetWatch(){
    //Si ya habia iniciado un interval, lo quitamos
    if(intervalId !== null){
        clearInterval(intervalId);
        intervalId = null;
    }
    acumulado = 0;
    inicio = null;
    minutos = 0;
    segundos = 0;
    tempInicial.innerHTML = `${String(minutos).padStart(2, "0")}:${String(segundos).padStart(2, "0")}`;

}

//Comienza a avanzar el timer una vez le hacemos click al boton start
start.addEventListener("click", startWatch);
stop.addEventListener("click", stopWatch);
reset.addEventListener("click", resetWatch);

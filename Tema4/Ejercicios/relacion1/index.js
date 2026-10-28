//Ejercicios con eventos en js

//Eventos basicos

//Busqueda del color
const rojo = document.getElementById("rojo");
const verde = document.getElementById("verde");
const azul = document.getElementById("azul");
const amarillo = document.getElementById("amarillo");
let buscar = document.getElementById("buscar");

let opciones = [rojo, verde, azul, amarillo];
objetivo = opciones[Math.floor(Math.random()*opciones.length)];

buscar.textContent += objetivo.id;
let respuesta;

rojo.addEventListener("click", ()=>{
    let respuesta = rojo;
    if(respuesta !== objetivo){
    console.log("Esa no es la respuesta");
    }
    else{
        console.log("Has ganado!!");
    }
});

verde.addEventListener("click", ()=>{
    let respuesta = verde;
    if(respuesta !== objetivo){
    console.log("Esa no es la respuesta");
    }
    else{
        console.log("Has ganado!!");
    }
});

azul.addEventListener("click", ()=>{
    let respuesta = azul;
    if(respuesta !== objetivo){
    console.log("Esa no es la respuesta");
    }
    else{
        console.log("Has ganado!!");
    }
});

amarillo.addEventListener("click", ()=>{
    let respuesta = amarillo;
    if(respuesta !== objetivo){
    console.log("Esa no es la respuesta");
    }
    else{
        console.log("Has ganado!!");
    }
});









//BOTON CAMBIANTE
const btn = document.getElementById("btn");

const original = btn.style.backgroundColor;

btn.addEventListener("mouseover", ()=>{
    console.log("Cambiando color del boton");
    btn.style.backgroundColor = "violet";
});

btn.addEventListener("mouseout", ()=>{
    console.log("Volviendo al color original");
    btn.style.backgroundColor = original;
});

btn.addEventListener("click", () =>{
    btn.innerHTML = "ME HICISTE CLICK!!"
});



//SIGUE LA INSTRUCCION
const presionoTecla = document.getElementById("presionoTecla");

document.addEventListener("keydown", (event)=>{
    if(event.key === "a" || event.key === "A"){
        presionoTecla.innerHTML = "Presionaste la tecla correcta!!";
    }
    else{
        presionoTecla.innerHTML = "Tecla equivocada, pulsa la tecla A!!!";
    }
});



//JUEGO DE REFLEJOS
const circulo = document.getElementById("circulo");
const respuestaReflejos = document.getElementById("respuestaReflejos");
let esVerde;

setInterval(() =>{
    esVerde = !esVerde;
    circulo.style.backgroundColor = esVerde? "green": "grey";
    //
}, 2000);

circulo.addEventListener("click", ()=>{
    if(circulo.style.backgroundColor == "green"){
        respuestaReflejos.innerHTML = "¡Reflejos rapidos!";
        
    }
    else{
        respuestaReflejos.innerHTML = "Demasiado pronto";
    }
});



//ARRASTRA EL NUMERO CORRECTO
const primero = document.getElementById("primero");
const segundo = document.getElementById("segundo");
const tercero = document.getElementById("tercero");
const cuarto = document.getElementById("cuarto");
const quinto = document.getElementById("quinto");
const sexto = document.getElementById("sexto");
const septimo = document.getElementById("septimo");
const octavo = document.getElementById("octavo");
const noveno = document.getElementById("noveno");
const marcarRespuesta = document.getElementById("marcarRespuesta");

let numeros = [primero, segundo, tercero, cuarto, quinto, sexto, septimo, octavo, noveno];

let posicionNumeros = Math.floor(Math.random() * numeros.length);
let objetivoNumeros = numeros[posicionNumeros];
objetivoNumeros.style.backgroundColor = "aqua";
marcarRespuesta.innerHTML = "Haz click en el número "+(posicionNumeros+1);

objetivoNumeros.addEventListener("click", ()=>{
    marcarRespuesta.innerHTML = "Presionaste el número correcto";
});


//SIMON DICE (VERSION SIMPLE)
const simonRojo = document.getElementById("simonRojo");
const simonVerde = document.getElementById("simonVerde");
const simonAzul = document.getElementById("simonAzul");
const simonAmarillo = document.getElementById("simonAmarillo");
const nivelSimon = document.getElementById("nivelSimon");

const colores = [simonRojo, simonVerde, simonAzul, simonAmarillo];
let colorParpadea = colores[Math.floor(Math.random()*colores.length)];
let parpadea = false;

if(colorParpadea == colores[0]){
    setInterval(()=>{
        parpadea = !parpadea;
        colorParpadea.style.backgroundColor = parpadea? "red": "pink";
    }, 1500); 
}

if(colorParpadea == colores[1]){
    setInterval(()=>{
        parpadea = !parpadea;
        colorParpadea.style.backgroundColor = parpadea? "green": "lightgreen";
    }, 1500); 
}

if(colorParpadea == colores[2]){
    setInterval(()=>{
        parpadea = !parpadea;
        colorParpadea.style.backgroundColor = parpadea? "blue": "lightblue";
    }, 1500); 
}

if(colorParpadea == colores[3]){
    setInterval(()=>{
        parpadea = !parpadea;
        colorParpadea.style.backgroundColor = parpadea? "yellow": "lightyellow";
    }, 1500); 
}

colorParpadea.addEventListener("click", ()=>{
    nivelSimon.innerHTML = "Pasas al siguiente nivel";
});


//CARRERA DE BOTONES
const btnCorrer = document.getElementById("btnCorrer");
const barraProgreso = document.getElementById("barraProgreso");
const mensajeMeta = document.getElementById("mensajeMeta");

let progreso = 0;
let incremento = 1;

btnCorrer.addEventListener("click", ()=>{
    progreso += incremento;

    if(progreso > 100)
        progreso = 100;

    barraProgreso.style.width = progreso + "%";

    if(progreso === 100){
        mensajeMeta.innerHTML = "ENHORABUENA!!! LLegaste a la meta!!!";
    }
});
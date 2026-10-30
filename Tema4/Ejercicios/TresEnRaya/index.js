//Tres en raya
const casillas = document.querySelectorAll(".casilla");
const tablero = document.getElementById("tablero");
const ganador = document.getElementById("ganador");

let turno = "X"; // El jugador X empieza
let juegoTerminado = false;

//Combinaciones ganadoras
const combinacionesGanadoras = [
    [0, 1, 2], // Fila 1
    [3, 4, 5], // Fila 2
    [6, 7, 8], // Fila 3
    [0, 3, 6], // Columna 1
    [1, 4, 7], // Columna 2
    [2, 5, 8], // Columna 3
    [0, 4, 8], // Diagonal principal
    [2, 4, 6]  // Diagonal secundaria
];


casillas.forEach((casilla, i) => {
    casilla.addEventListener("click", ()=>{
        if (casilla.innerHTML !== "" || juegoTerminado) return;

        // Pintamos la X o la O dependiendo del turno
        casilla.innerHTML = turno;
        comprobarGanador();
        

        // Si el juego no ha terminado, cambiamos de turno
        if (!juegoTerminado) {
            turno = turno === "X" ? "O" : "X";
        }
    });
});



function comprobarGanador() {
    for (let i = 0; i < combinacionesGanadoras.length; i++) {
        const [a, b, c] = combinacionesGanadoras[i];

        //Comparamos si a, b, c tienen texto y tienen el mismo contenido(es decir, si las tres tienen X u O)
        if (
            casillas[a].innerHTML !== "" &&
            casillas[a].innerHTML === casillas[b].innerHTML &&
            casillas[a].innerHTML === casillas[c].innerHTML
        ) {
            juegoTerminado = true;
            
            ganador.innerHTML = `¡El jugador ${turno} ha ganado!`;
            
            return;
        }
    }

    const arrayCasillas = Array.from(casillas);
    const hayEmpate = arrayCasillas.every(casilla => casilla.innerHTML !== "");
    
    if (hayEmpate && !juegoTerminado) {
        juegoTerminado = true;
      
        ganador.innerHTML = "Hay empate"
        reiniciarJuego();
      
    }
}


function reiniciarJuego() {
    casillas.forEach(casilla => {
        casilla.innerHTML = "";
    });
    turno = "X"; // X vuelve a empezar
    juegoTerminado = false;
}
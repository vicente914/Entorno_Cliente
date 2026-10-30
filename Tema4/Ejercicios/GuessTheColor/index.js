//THE GREAT RGB GUESSING GAME

const easyMode = document.getElementById("easyMode");
const hardMode = document.getElementById("hardMode");
const colorsContainer = document.getElementById("colorsContainer");
const goal = document.getElementById("goal");

let colorsList = [];

function randomRGBColors(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r},${g},${b})`;
}

function generateColors(cantidad){
    colorsContainer.innerHTML = "";
    

    if (cantidad === 4) {
        colorsContainer.style.gridTemplateColumns = "1fr 1fr";
    } 
    else {
        colorsContainer.style.gridTemplateColumns = "1fr 1fr 1fr";
    }

    for(let i = 0; i < cantidad; i++){
        const square = document.createElement("div");
        square.classList.add("color");
        
        let currentColor= randomRGBColors();
        square.style.backgroundColor = currentColor;
        colorsList.push(currentColor);


        square.addEventListener("click", ()=>{
            checkGuess(currentColor);
        });
        colorsContainer.appendChild(square);
        

    }
}

function setGoal(){
    let goalColor = colorsList[Math.floor(Math.random() * colorsList.length)];
    goal.innerHTML = " "+goalColor;
}

function checkGuess(colorAdivinado) {
    if (colorAdivinado === goal.textContent.trim()) {
        goal.style.color = "#4caf50"; 
        goal.textContent = "¡CORRECTO!"; 
    }
}

easyMode.addEventListener("click", ()=> {
    generateColors(4);
    setGoal();
    
});

hardMode.addEventListener("click", ()=> {
    generateColors(6);
    setGoal();
});



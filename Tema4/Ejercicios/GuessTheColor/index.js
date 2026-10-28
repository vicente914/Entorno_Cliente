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
        square.style.backgroundColor = randomRGBColors();

        colorsContainer.appendChild(square);
        colorsList[i] = square.style.backgroundColor;

    }
}

function setGoal(){
    let goalColor = colorsList[Math.floor(Math.random() * colorsList.length)];
    goal.innerHTML = " "+goalColor;
}
easyMode.addEventListener("click", ()=> {
    generateColors(4);
    setGoal();
});

hardMode.addEventListener("click", ()=> {
    generateColors(6);
    setGoal();
});

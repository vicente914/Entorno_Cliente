//Ruleta de 36 números

let ruleta = [];

for(let i = 0; i <= 36; i++){
    ruleta[i] = Math.floor(Math.random()*36)+ 1
}

let numGanador = Math.floor(Math.random() * Math.max(...ruleta)) + Math.min(...ruleta);
console.log(ruleta);
console.log(numGanador);
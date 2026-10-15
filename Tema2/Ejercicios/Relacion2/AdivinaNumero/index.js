// Ejercicio 4

//Adivina el numero (1-100)
const numAdivinar = Math.floor(Math.random()*100)+1;

let num;
while(num != numAdivinar){
    num = Number(prompt(`Adivina el número del 1 al 100`));
    if(num < numAdivinar){
        alert(`El número que buscas es mayor`);
    }
    else if(num > numAdivinar){
        alert(`El número que buscas es menor`);
    }
    else{
        alert(`Felicidades! Has ganado!!    `);
    }
}

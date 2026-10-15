//Distancia entre dos puntos

let x1 = Number(prompt(`Introduce las coordenadas para x1`));
let x2 = Number(prompt(`Introduce las coordenadas para x2`));
let y1 = Number(prompt(`Introduce las coordenadas para y1`));
let y2 = Number(prompt(`Introduce las coordenadas para y2`));

let distancia = Math.sqrt(x2 - x1)**2 + (y2 - y1)**2;
console.log(`La distancia es ${distancia}`);
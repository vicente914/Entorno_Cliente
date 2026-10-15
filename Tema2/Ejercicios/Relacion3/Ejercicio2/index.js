//Operaciones con fechas

//Sumar días
//funcion que recibe como parametros una fecha, y la cantidad de días que 
//le queremos sumar
function sumarDias(fecha, dias){
    let nuevaFecha = new Date(fecha);
    nuevaFecha.setDate(nuevaFecha.getDate() + dias);
    return nuevaFecha;
}

let fecha1 = new Date();
let fecha2 = sumarDias(fecha1, 10);

console.log(fecha2);

//Diferencia entre dos fechas
//calculamos cuantos dias quedan desde hoy hasta el 31 de diciembre
let fechaActual = new Date(2026, 9, 3); 
let dic = new Date(2026, 11, 31);
const MS_POR_DIA = 1000 * 60 * 60 * 24;
let diasRestantes = Math.floor((dic - fechaActual) / MS_POR_DIA);
//La constante MS_POR_DIA, es para sacar los milisegundos por dia, porque
// la resta normal de nuestras fecha, habría devuelto la diferencia en milisegundos
console.log(diasRestantes);


//Comparamos dos fechas
(fecha1 < fecha2)?console.log(`${fecha2} es mayor que ${fecha1}`):console.log(`${fecha1} es mayor que ${fecha2}`);


//Funcion que dado un año y mes, devuelve que dia de la semana fue el primer dia del mes

function primerDiaMes(anio, mes){
    let fechaFuncion = new Date(anio, mes-1, 1);
    const diasSemana = ['Domingo','Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
    return diasSemana[fechaFuncion.getDay()];
}


console.log(primerDiaMes(2026, 12));
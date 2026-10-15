//Formateo y zonas horarias

//Convertimos la fecha actual en formato ISO

let fechaActual = new Date();
console.log(fechaActual.toISOString());
console.log(fechaActual);

//Mostramos la fechaActual en hora local y UTC
//toISOString() siempre esta en formato UTC
console.log(fechaActual.toDateString());
console.log(fechaActual.toISOString());


//Formateamos una fecha con una funcion para que se muestre
// DD/MM/YYYY HH:mm:ss

function formatearFecha(fecha){
    const dia = String(fecha.getDate()).padStart(2, '0');
    const mes = String(fecha.getMonth()).padStart(2, '0');
    const anio = fecha.getFullYear();
    const horas = String(fecha.getHours()).padStart(2,'0');
    const min = String(fecha.getMinutes()).padStart(2, '0');
    const seg = String(fecha.getSeconds()).padStart(2,'0');

    return `${dia} / ${mes} / ${anio}  ${horas}:${min}:${seg}`;
}

console.log(formatearFecha(fechaActual));


//Uso de intl.DateTimeFormat
let espania = new Intl.DateTimeFormat('es-ES').format(fechaActual);
let eeuu = new Intl.DateTimeFormat('en-US').format(fechaActual);
let japon = new Intl.DateTimeFormat('ja-JP').format(fechaActual);

console.log(`Formato españa: ${espania}`);
console.log(`Formato Estados Unidos:  ${eeuu}`);
console.log(`Formato de Japon: ${japon}`);
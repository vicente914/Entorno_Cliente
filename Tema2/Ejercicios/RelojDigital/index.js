//Reloj digital

const reloj = document.getElementById("reloj");
const fechaActual = document.getElementById("fechaActual");

const dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayor", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];



function relojDigital(){
    let hora = new Date();
    const diaSemana = dias[hora.getDay()];
    const mes = meses[hora.getMonth()];
    const horas = String(hora.getHours()-12).padStart(2,'0');
    const minutos = String(hora.getMinutes()).padStart(2,'0');
    const segundos = String(hora.getSeconds()).padStart(2,'0');

    reloj.innerHTML = `${horas}:${minutos}:${segundos}`;
    fechaActual.innerHTML = `${diaSemana}, ${hora.getDate()} de ${mes} de ${hora.getFullYear()}`;
}

setInterval(relojDigital, 1000);

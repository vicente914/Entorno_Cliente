//Creación y lecutra de fechas

//Creamos un objeto date con la fecha actual
let fechaActual = new Date();
console.log(fechaActual);

//Creamos un objeto date con mi fecha de nacimiento
let fechaNac = new Date(2007, 10, 2);
console.log(fechaNac);

//Obtendremos parte de una fecha
console.log(fechaActual.getFullYear());
console.log(fechaActual.getMonth());
console.log(fechaActual.getDay());
console.log(fechaActual.getHours(), fechaActual.getMinutes(), fechaActual.getSeconds());

//Convertimos a String una fecha
console.log(fechaActual.toDateString());
console.log(fechaActual.toTimeString());
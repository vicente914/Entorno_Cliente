//Generador de contraseñas simple

const caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ?¿!⁻_#*%$&0123456789';

let contrasena = '';
for(let i = 0; i < 8; i++){
    let caracterAleatorio = Math.floor(Math.random() * caracteres.length);
    contrasena += caracteres[caracterAleatorio];
}

console.log(contrasena);
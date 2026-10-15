/**
 * @name isOdd
 * @description Devuelve si un número es impar
 * 
 * @param {number} x - El número a evaluar
 * @returns {Boolean} Devuelve true si el número {x} es impar, false sino
 *
 * @example
 *  isOdd(3) // returns true
 */

function isOdd(x){
    let esImpar = true;
    if(Number(x) % 2 === 0){
        esImpar = false
    }
    
    if(x === undefined){
        esImpar = 'Debes introducir un número!'
    }
    return esImpar;
}

/**
 * @name inRange
 * @description Devuelve si un número se encuentra dentro de un rango
 * 
 * @param {number} x - El número a evaluar si se encuentra dentro del rango
 * @param {number} min - El límite inferior del rango
 * @param {number} max - El límite superior del rango
 * @returns {Boolean} Devuelve true si el número {x} se encuentra dentro del rango definido por {min} y {max}, false sino
 *
 * @example
 *  inRange(2, -4, 10) // returns true
 */

function inRange(x, min, max){
    let enRango = false
    if(min > max){
        enRango = `El número minimo del rango no puede ser mayor que el maximo, introduce valores correctos`;
    }
    else{
        if(x >= min && x <= max){
            enRango = true;        
        }
    }

    return enRango;
}

/**
 * @name getBiggestNumber
 * @description Devuelve el número más grande de un array
 * 
 * @param {number[]} numbers - Un array de números
 * @returns {Number} El número más grande del arrray {numbers}
 *
 * @example
 *  getBiggestNumber([3, 8, 2, 1, 10]) // returns 10
 */

function getBiggestNumber(numbers){
    let numMax;
    if(!Array.isArray(numbers)){
        numMax = 'Debes introducir un array';
    }
    else{
        numMax = Math.max(...numbers);
    }

    return numMax;
}

/**
 * @name getPercentage
 * @description Devuelve el porcentaje correspondiente de un número
 * 
 * @param {number} number - Número a obtener el porcentage
 * @param {number} percentage - Porcentaje a obtener
 * @returns {Number}
 *
 * @example
 *  getPercentage(200, 10) // returns 20
 */

function getPercentage(number, percentage){
    let resultado;
    if(typeof number != 'number' || typeof percentage != 'number'){
        resultado = 'Tanto el numero como el porcentaje deseados deben ser numeros!';
    }
    else{
        resultado = (number / 100) * percentage;
    }
    
    return resultado;
}



/**
 * @name getRandomColorSequence
 * @description Devuelve una secuencia aleatoria de ciertos colores con cierta longitud
 * 
 * @param {string[]} colors - Array de colores a ser utilizados en la secuencia
 * @param {number} length - Longitud de la secuencia
 * @returns {String[]} - Secuencia aleatoria de colores disponibles en {colors}, con longitud {length}
 *
 * @example
 *  getRandomColorSequence(["red", "blue", "green"], 4) // returns ['blue', 'red', 'red', 'green']
 */

function getRandomColorSequence(colors, length){
    let secuenciaColores = [];
    if(Array.isArray(colors) && typeof length == 'number'){
        for(let i = 0; i < length; i++){
            secuenciaColores[i] = colors[Math.floor(Math.random() * colors.length)];
        }
    }
    else{
        secuenciaColores = 'Debes introducir un array y luego un numero!';
    }
    return secuenciaColores;
}

/**
 * @name getRockPaperScissor
 * @description Devuelve una jugada aleatoria de piedra, papel o tijera
 * 
 * @returns {String} - Devuelve "rock", "paper" o "scissor"
 *
 * @example
 *  getRockPaperScissor() // returns "paper"
 */

function getRockPaperScissor(){
    let options = ["Rock", 'Paper', 'Scissor'];
    let jugada = options[Math.floor(Math.random() * options.length)];
    return jugada;
}

/**
 * @name getRockPaperScissorRandomSequence
 * @description Devuelve una secuencia aleatoria de jugadas de piedra, papel o tijera, con cierta longitud
 *
 * @param {number} length - Longitud de la secuencia
 * @returns {String[]}
 *
 * @example
 *  getRockPaperScissorRandomSequence(4) // returns ["rock", "paper", "rock", "scissor"]
 */

function getRockPaperScissorRandomSequence(length){
    let jugadaSecuencia = [];
    if(typeof length === 'number'){
        let options = ["Rock", 'Paper', 'Scissor'];   
        for(let i = 0; i < length; i++){
            jugadaSecuencia[i] = options[Math.floor(Math.random() * options.length)];;
        }
    }
    else{
        jugadaSecuencia = 'Debes introducir un número para indicar cuantas jugadas quieres ver!!';
    }
    return jugadaSecuencia;
}



/**
 * @name filterNumbersGreaterThan
 * @description Filtra los números de un array que sean mayor a cierto número x dejando solo los que sean menores a este
 *
 * @param {number[]} numbers - Array de números a filtrar
 * @param {number} filter - Número a partir del cuál filtrar los demás números
 * @returns {Number[]} - Array de números filtrados menores a {filter}
 *
 * @example
 *  filterNumbersGreaterThan([3, 8, 12, 1, 7, 4], 7) // returns [3, 1, 4]
 */

function filterNumbersGreaterThan(numbers, filter){
    let numerosFiltrados = [];
    if(Array.isArray(numbers) && typeof filter == 'number'){
        numerosFiltrados = numbers.filter(x => x < filter);
    }
    else{
        numerosFiltrados = 'Debes introducir un array y un numero';
    }
    return numerosFiltrados;
}

/**
 * @name getFactorial
 * @description Devuelve el factorial de un número
 *
 * @param {number} x - Número del cuál obtener factorial
 * @returns {Number} - Factorial de {x}
 *
 * @example
 *  getFactorial(4) // returns 24
 */

function getFactorial(x){
    let factorial = 1;
    for(i = 1; i <= x; i++){
        factorial *= i;
    }
    return factorial;
}


/**
 * @name areArraysEqual
 * @description Devuelve si dos arrays son iguales (tienen los mismos ítems en el mismo orden)
 *
 * @param {[]} a 
 * @param {[]} b 
 * @returns {Boolean} - Devuelve true si ambos arrays son iguales, false sino
 *
 * @example
 *  areArraysEqual([1, 4], [1, 4]) // returns true
 */

function areArraysEqual(a, b){
    sonIguales = true;
    if(Array.isArray(a) && Array.isArray(b)){
        if(a.length === b.length){
            for(let i = 0; i < a.length; i++){
                if(a[i] !== b[i]){
                    sonIguales = false;
                }
            }
        }
    }
    else{
        sonIguales = 'Debes introducir dos array!';
    }

    return sonIguales;
}

/**
 * @name toHackerSpeak
 * @description Convierte un string a "Hacker Speak". Para hacerlo, tiene que transformar las "a" en 4, las "e" en 3, las "i"
 * en 1, las "o" en 0 y las "s" en 5
 *
 * @param {string} text 
 * @returns {String} - El texto convertido a "Hacker Speak"
 * 
 * @example
 *  toHackerSpeak("I'm a hacker now") // returns "1'm 4 h4ack3r n0w"
 */

function toHackerSpeak(text){
    let codificacion = '4310543105';
    let letras = 'aeiosAEIOS';
    let resultado='';
    if(typeof text !== 'string'){
        resultado = 'Debes escribir un string';
    }
    else{
        for(let i = 0; i < text.length; i++){
           letra = text[i];
           posicion = letras.indexOf(letra);

           if(posicion !== -1){
                resultado += codificacion[posicion];
           }
           else{
                resultado += letra;
           }
        }
    }
    return resultado;
}


/**
 * @name getFileExtension
 * @description Obtiene la extensión de un archivo
 *
 * @param {string} file - El nombre del archivo a obtener la extensión 
 * @returns {String} - La extensión del archivo
 * 
 * @example
 *  getFileExtension("imagen.jpg") // returns "jpg"
 */

function getFileExtension(file){
    let ext = '';
    let posicionPunto;
    if(typeof file !== 'string'){
        ext += 'Debes escribir un string!';
    }
    else{
        posicionPunto = file.indexOf(".");
        if(posicionPunto === -1){
            ext += 'El archivo/texto pasado, no contiene una extensión!';
        }
        else{
            ext += file.substring(posicionPunto);
        }
        
    }

    return ext;
}

/**
 * @name flatArray
 * @description Dado un array 2D, devuelve un array 1D que contiene todos los ítems 
 *
 * @param {[][]} arr - Array 2D a "aplanar" 
 * @returns {[]} - El array "aplanado"
 * 
 * @example
 *  flatArray([[1, 5, 4], [3, 10], [2, 5]]) // returns [1, 5, 4, 3, 10, 2, 5]
 */

function flatArray(arr){
    let arrayPlano = [];
    if(Array.isArray(arr) && arr.every(Array.isArray)){
        arrayPlano = arr.flat();
    }
    else{
        arrayPlano = 'Debes introducir un array de arrays!!!';
    }
    return arrayPlano

}

/*
function flatArray(arr){
    let arrayPlano = [];
    for(array of arr){
        for(contenido of array){
            arrayPlano.push(contenido);
        }
    }

    return arrayPlano;
}
*/
/**
 * @name removeDuplicates
 * @description Remueve duplicados de un array 
 *
 * @param {[]} arr - Array con duplicados a remover
 * @returns {[]} - El array resultante sin duplicados
 * 
 * @example
 *  removeDuplicates([4, 5, 10, 4, 10, 2]) // returns [4, 5, 10, 2]
 */

function removeDuplicates(arr){
    let arrFiltrado = [];
    if(Array.isArray(arr)){
        arrFiltrado = arr.filter((x, index) => arr.indexOf(x) === index);
    }
    else{
        arrFiltrado = 'Debes introducir un array!!';
    }
    return arrFiltrado;
}


/**
 * @name countLetter
 * @description Devuelve la cantidad de veces que una letra aparece en un string 
 *
 * @param {string} letter - Letra a contar
 * @param {string} text - Texto sobre el que realizar la cuenta de {letter}
 * @returns {Number} - Número de veces que aparece {letter} en {text}
 * 
 * @example
 *  countLetter("a", "javascript") // returns 2
 */

function countLetter(letter, text){
    let apariciones = 0;
    if(typeof letter === 'string' && typeof text === 'string'){
        for(let i = 0; i < text.length; i++){
            if(text[i] == letter){
                apariciones++;
            }
        }
    }
    else{
        apariciones = 'Debes introducir dos string!!';
    }
    return apariciones;
}


/**
 * @name canPlay
 * @description Devuelve si dada una mano de Uno y una carta en la mesa, puede jugar o tiene que retirar del mazo. Las cartas
 * tienen uno de 4 colores posibles (red, blue, green or yellow) y un número del 1 al 9. Una carta se escribe como un string
 * con color y número. Por ejemplo: "yellow 3", "red 6". Se puede jugar si la carta en la mano coincide en color o en número
 * con la carta en la mesa
 *
 * @param {string[]} hand - Array de cartas que tiene en la mano 
 * @param {string} face - Carta que está en la mesa
 * @returns {Boolean} - Devuelve true si puede jugar alguna carta, o false si tiene que retirar del mazo
 * 
 * @example
 *   canPlay(["yellow 3", "yellow 5", "red 8"], "red 2") // returns true
 *   canPlay(["yellow 3", "yellow 5", "red 8"], "blue 5") // returns true
 *   canPlay(["yellow 3", "blue 5", "red 8", "red 9"], "green 4") // returns false
 *   canPlay(["yellow 3", "red 8"], "green 2") // returns false
 */

function canPlay(hand, face){
    let puedeJugar = false;
    if(Array.isArray(hand) && typeof face === 'string'){
        
    }
}
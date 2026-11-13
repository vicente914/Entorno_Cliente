//The hangman
const alphabet = document.getElementById("alphabet");
const theWord = document.getElementById("theWord");
const lives = document.getElementById("lives");

//Possible words to guess
const words = ["dog", "building", "bomb", "soccer", "basketball", "banana", "orange", "taekwondo"];
let randIndexWord = Math.floor(Math.random()*words.length);
let randWord = words[randIndexWord];

//Lives counter for the player
let livesCount = 10;
lives.textContent += ` ${livesCount} lives`;

//We make an array with each letter of the alphabet
const alphabetLetters = 'abcdefghijklmnopqrstuvwxyz'.split('');

//for the guess to word, here we save the spaces
const wordSlots = [];


//We create the spaces needed for the random word to guess
for(let i = 0; i < randWord.length; i++){
    const span = document.createElement("span");
    span.textContent = "_ ";
    span.classList.add("letter-slot");
    theWord.appendChild(span);
    wordSlots.push(span);
}


//We go through the array we created, to add the same behaviour to each letter
alphabetLetters.forEach(letter =>{
    //we create a button for each letter
    const button = document.createElement("button");
    button.textContent = letter;
    button.classList.add("key");

    //Each time we click on a letter
    button.addEventListener("click", ()=>{

        if(randWord.includes(letter)){

            console.log(`la letra ${letter} SI esta en la palabra`);
            //We check each letter of the word to guess
            for(let i = 0; i < randWord.length; i++){
                if(randWord[i] === letter){
                    wordSlots[i].textContent = letter;
                }
            }
                
        }
    });

    alphabet.appendChild(button);
});

//console.log(randWord);
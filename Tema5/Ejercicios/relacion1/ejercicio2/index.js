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



//We create the spaces needed for the random word to guess
for(let i = 0; i < randWord.length; i++){
    theWord.textContent += "_ "
}


//We go through the array we created, to add the same behaviour to each letter
alphabetLetters.forEach(letter =>{
    //we create a button for each letter
    const button = document.createElement("button");
    button.textContent = letter;
    button.classList.add("key");


    button.addEventListener("click", ()=>{
        console.log(`letra ${letter} usada`);
        for(letter of randWord){
            if(button.textContent = letter){
                
            }
        }
    });

    alphabet.appendChild(button);
});


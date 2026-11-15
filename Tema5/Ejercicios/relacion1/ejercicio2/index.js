//The hangman
const alphabet = document.getElementById("alphabet");
const theWord = document.getElementById("theWord");
const lives = document.getElementById("lives");
const chosenCategory = document.getElementById("chosenCategory");
const restartGame = document.getElementById("restart");
let gameActive = true;

//Possible words to guess
const words = ["dog", "building", "bomb", "soccer", "basketball", "banana", "orange", "taekwondo"];
let randIndexWord = Math.floor(Math.random()*words.length);
let randWord = words[randIndexWord];

//Lives counter for the player
let livesCount = 10;
lives.textContent += ` ${livesCount} lives`;

//Counter for the letters the player guess
let correctLetters = 0;

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

        //If the games alredy finished, we do not let the player keep playing with the buttons
        if(!gameActive) return;
    
        if(randWord.includes(letter)){
            //We check each letter of the word to guess
            for(let i = 0; i < randWord.length; i++){
                if(randWord[i] === letter){
                    wordSlots[i].textContent = letter;
                    correctLetters++;
                }
            }
            button.disabled = true;
            button.classList.add("used");


            if(correctLetters === randWord.length){
                gameActive = false;
                const winMessage = document.createElement("h2");
                winMessage.textContent = 'Congratulations!! You won!!!';
                chosenCategory.appendChild(winMessage);

                //Avoid the player from keep pushing buttons after the game ended
                document.querySelectorAll(".key").forEach(btn => {
                    btn.disabled = true
                    btn.classList.add("used");
                    });
            }
        }
        else{
            livesCount--;
            lives.textContent =  ` You have ${livesCount} remaining lives`;
            button.disabled = true;
            button.classList.add("used");

            if(livesCount === 0){
                gameActive = false;
                const loseMessage = document.createElement("h2");
                loseMessage.textContent = `You lost all your lives, you lost`;
                chosenCategory.appendChild(loseMessage);

                //Avoid the player from keep pushing buttons after the game ended
                document.querySelectorAll(".key").forEach(btn => {
                    btn.disabled = true;
                    btn.classList.add("used");
                });
            }
        }
    });

    alphabet.appendChild(button);
});

restartGame.addEventListener("click", ()=>{
    location.reload();
});
//console.log(randWord);
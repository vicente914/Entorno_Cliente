//PAIRS GAME
const indications = document.getElementById("indications");
const timeLimit = document.getElementById("timeLimit");
const pairsContainer = document.getElementById("pairsContainer");

/*-----------   CONFIGURATION   --------------*/
const pairs = ["1", "2", "3", "4", "5"];
const time_limit = 120;
const missMatch_Delay = 800; // ms que se muestran dos cartas distintas antes de volver a taparse


//------------ STATUS ------------------------
let firstCard = null;
let lockBoard = false;
let gameStarted = false;
let matchedPairs = 0;


let secondsLeft = time_limit;
let timerId = null;



// -------------------- FUNCTIONS ------------------------

//Function to shuffle the pairs
function shuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

//Function to give format to the minutes and seconds left
function formatTime(totalSeconds){
    const m = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
    const s = String(totalSeconds % 60).padStart(2, "0");
    return `${m}:${s}`;
}

/*--------------------- TIME LIMIT ------------------------------*/

function startTimer(){
    timerId = setInterval(() => {
        secondsLeft--;
        timeLimit.textContent = formatTime(secondsLeft);

        if (secondsLeft <= 0) {
            endGame(false);
        }
    }, 1000);
}

function stopTimer(){
    clearInterval(timerId);
    timerId = null;
}


/*------------------ THE PAIRS ---------------------------------------*/

function flipCard(card){
    card.classList.add("flipped");
}

function unflipCard(card){
    card.classList.remove("flipped");
    card.textContent = "";
}

function handleCardClick(card){
    // Ignore invalid clicks
    if (lockBoard) return;
    if (card.classList.contains("flipped")) return; // Alredy with a pair or flipped

    // the first click triggers the counter
    if (!gameStarted) {
        gameStarted = true;
        indications.textContent = "FIND ALL THE PAIRS";
        startTimer();
    }

    flipCard(card);

    // First card's try
    if (!firstCard) {
        firstCard = card;
        return;
    }

    // Comparing with the second card
    checkMatch(firstCard, card);
}


function checkMatch(cardA, cardB){
    if (cardA.textContent === cardB.textContent) {
        // If it is a pair
        cardA.classList.add("matched");
        cardB.classList.add("matched");
        firstCard = null;
        matchedPairs++;

        if (matchedPairs === parejas.length) {
            endGame(true);
        }

    } 
    else{
        // If there is no coincidence
        lockBoard = true;
        setTimeout(() => {
            unflipCard(cardA);
            unflipCard(cardB);
            firstCard = null;
            lockBoard = false;
        }, missMatch_Delay);
    }
}


/** ------------    END / RESET -----------------------------------*/

function endGame(won){
    stopTimer();
    lockBoard = true;
    indications.textContent = won? 'YOU WIN!!!!': 'TIMES UP! YOU LOSE';
}

function resetGame(){
    stopTimer();
    firstCard = null;
    lockBoard = false;
    gameStarted = false;
    matchedPairs = 0;
    secondsLeft = time_limit;

    indications.textContent = "CLICK ANY CARD TO BEGIN";
    timeLimit.textContent = formatTime(time_limit);

     // Duplicates the data, shuffle them and give it to the HTML 
    const deck = shuffle([...pairs, ...pairs]);

    cards.forEach((card, i) => {
        card.textContent = deck[i];
        card.textContent = "";
        card.classList.remove("flipped", "matched");
    });
}





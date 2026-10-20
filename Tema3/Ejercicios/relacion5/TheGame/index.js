//The game
class Roshambo{
    constructor(){
        this.player1 = new Player();
        this.player2 = new Player();
    }

    //We are playing at the best of three
    duelMatch(){
        let winner;
        do{
            let player1Try = this.player1.play();
            let player2Try = this.player2.play();
            console.log(`Player 1: ${this.player1.roundsWon} points   |   Player 2: ${this.player2.roundsWon} points`);
            if(player1Try === "rock" && player2Try === "scissor"){
                console.log(`player 1 try: ${player1Try}`);
                console.log(`player 2 try: ${player2Try}`);
                this.player1.roundsWon++;
                console.log("Point for player 1");
            }
            else if(player1Try === "paper" && player2Try === "rock"){
                console.log(`player 1 try: ${player1Try}`);
                console.log(`player 2 try: ${player2Try}`);
                this.player1.roundsWon++;
                console.log("Point for player 1");
            }
            else if(player1Try === "scissor" && player2Try === "paper"){
                console.log(`player 1 try: ${player1Try}`);
                console.log(`player 2 try: ${player2Try}`);
                this.player1.roundsWon++;
                console.log("Point for player 1");
            }
            else if(player1Try === player2Try){
                console.log(`player 1 try: ${player1Try}`);
                console.log(`player 2 try: ${player2Try}`);
                console.log("Tie! No points for both players, try again");
            }
            else{
                console.log(`player 1 try: ${player1Try}`);
                console.log(`player 2 try: ${player2Try}`);
                this.player2.roundsWon++;
                console.log("Point for player 2");
            }
        }while((this.player1.roundsWon < 2 && this.player2.roundsWon < 2))

            if(this.player1.roundsWon >= 2){
                winner = `Player 1 WON!!!`;
            }
            else{
                winner = `Player 2 WON!!!`;
            }

        return winner
    }

}

class Player{
    constructor(){
        this.playerWon = false;
        this.roundsWon = 0;
        this.options = ["rock", "paper", "scissor"];
    }

    play(){
        let option = Math.floor(Math.random() * 3)
        return this.options[option];
    }
}
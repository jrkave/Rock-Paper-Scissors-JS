// Encapsulates Game Functionality
class Game {
    constructor() {
        this.playerScore = 0;
        this.computerScore = 0;
        this.ties = 0;
        this.prevWinner = '';
        this.currLeader = '';
        this.moves = {'player': '', 'computer': ''}
    }

    playGame(move) {
        // generates computer move
        let computerMove = this.determineMove(Math.floor(Math.random() * 3));

        // updates moves
        this.moves['player'] = move;
        this.moves['computer'] = computerMove

        // updates other game instance variables
        this.updateAttributes();
    }

    determineMove(num) {
        // determines computer move based on num
        if (num === 0) {
            return 'rock';
        }
        else if (num === 1) {
            return 'paper';
        }
        else {
            return 'scissors'
        }
    }

    updateAttributes() {
        // updates playerScore, computerScore, ties, prevWinner, currLeader
        let pMove = this.moves['player'];
        let cMove = this.moves['computer'];

        // tie
        if (pMove === cMove) {
            this.ties += 1;
            this.prevWinner = 'tie';
        }
        // player played rock
        else if (pMove === 'rock') {
            // computer played scissors
            if (cMove === 'scissors') {
                this.playerScore += 1;
                this.prevWinnerinner = 'player';
            }
            // computer played paper
            else {
                this.computerScore += 1;
                this.prevWinner = 'computer';
            }
        }
        // player played paper
        else if (pMove === 'paper') {
            // computer played scissors
            if (cMove === 'scissors') {
                this.computerScore += 1;
                this.prevWinner = 'computer';
            }
            // computer played rock
            else {
                this.playerScore += 1;
                this.prevWinner = 'player';
            }
        } 
        // player played scissors
        else {
            // computer played paper
            if (cMove === 'paper') {
                this.playerScore += 1;
                this.prevWinner = 'player';
            }
            // computer played rock
            else {
                this.computerScore += 1;
                this.prevWinner = 'computer';
            }
        }

        this.determineLeader();
    }

    determineLeader() {
        if (this.playerScore === this.computerScore) {
            this.currLeader = 'tie';
        }
        else if (this.playerScore > this.computerScore) {
            this.currLeader = 'player';
        }
        else {
            this.currLeader = 'computer';
        }
    }
}
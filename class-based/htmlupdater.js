class HTMLUpdater {
    static updateGameStatus(game) {
        // updating text content
        // scores
        document.getElementById('player-score').textContent = game.playerScore;
        document.getElementById('computer-score').textContent = game.computerScore;
        document.getElementById('num-ties').textContent = game.ties;
        // logic
        document.getElementById('logic').textContent = this.determineLogicString(game);
        // leader
        document.getElementById('curr-leader').textContent = this.determineLeaderString(game.currLeader);
        // moves
        document.getElementById('player-move').textContent = game.moves['player'];
        document.getElementById('computer-move').textContent = game.moves['computer'];
        
        // updating styles
        // winning move color
        if (game.prevWinner === 'player') {
            document.getElementById('player-move').style.color = 'red';
        }
        else if (game.prevWinner === 'computer') {
            document.getElementById('computer-move').style.color = 'red';
        }
        else {
            document.getElementById('computer-move').style.color = 'black';
            document.getElementById('computer-move').style.color = 'black';
        }
        // leading score color
        if (game.currLeader === 'player') {
            document.getElementById('player-score').style.color = 'red';
        }
        else if (game.currLeader === 'computer') {
            document.getElementById('computer-score').style.color = 'red';
        }
        else {
            document.getElementById('player-score').style.color = 'black';
            document.getElementById('computer-score').style.color = 'black';
        }
        // document.getElementById('prev-winner').textContent = this.determineWinnerString(game.prevWinner);
    }

    static determineLogicString(game) {
        // sets moves
        const pMove = game.moves['player'];
        const cMove = game.moves['computer'];
    
        // lists possible combos
        const moveCombo1 = ['rock', 'paper'];
        const moveCombo2 = ['paper', 'scissors'];
        const moveCombo3 = ['rock', 'scissors'];
    
        // returns string based on combo of moves
        if (pMove === cMove) {
            return "It's a tie!";
        }
        else if (moveCombo1.includes(pMove) && moveCombo1.includes(cMove)) {
            return "Paper beats Rock!";
        }
        else if (moveCombo2.includes(pMove) && moveCombo2.includes(cMove)) {
            return "Scissors beats Paper!";
        }
        else {
            return "Rock beats Scissors!";
        }
    }

    static determineLeaderString(currLeader) {
        if (currLeader === 'tie') {
            return "Tie game!";
        }
        else if (currLeader === 'player') {
            return "You're in the lead!"
        }
        else {
            return "The computer is in the lead!"
        }
    }

    static determineWinnerString(winner) {
        if (winner === 'tie') {
            return;
        }
        else if (winner === 'player') {
            return "You won!";
        }
        else {
            return "The computer won!";
        }
    }
}

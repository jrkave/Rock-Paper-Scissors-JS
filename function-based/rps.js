// Game Functionality
let playerScore = 0;
let computerScore = 0;
let ties = 0;
let winner = '';
let moves = {};

const buttons = document.querySelectorAll('button');
buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        playGame(button.id); // plays game, updates game-related variables
        updateHTML(); // updates HTML
    });
 });

function playGame(move) {
    let computerMove = getPlay(generateMove());
    let playerMove = move;

    moves = {
        'player': playerMove,
        'computer': computerMove
    }

    // player tied
    if (playerMove === computerMove) {
        ties += 1;
        winner = 'tie';
    }
    // played rock
    else if (playerMove === 'rock') {
        if (computerMove === 'paper') {
            computerScore += 1;
            winner = 'computer';
        }
        else {
            playerScore += 1;
            winner = 'player';
        }
    }
    // played paper
    else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            playerScore += 1;
            winner = 'player';
        }
        else {
            computerScore += 1;
            winner = 'computer';
        }
    }
    // played scissors
    else {
        if (computerMove === 'rock') {
            computerScore +=1 ;
            winner = 'computer';
        }
        else {
            playerScore += 1;
            winner = 'player';
        }
    }
}

function generateMove() {
    return Math.floor(Math.random() * 3);
}

function getPlay(num) {
    let play = '';
    if (num === 0) {
        play = 'rock';
    }
    else if (num === 1) {
        play = 'paper';
    }
    else {
        play = 'scissors';
    }
    return play;
}

// Updating HTML
function updateMoves() {
    document.getElementById('player-move').innerHTML = moves['player'];
    document.getElementById('computer-move').innerHTML = moves['computer'];
}

function updateWinner() {
    if (playerScore > computerScore) {
        document.getElementById('winner').innerHTML = "You're in the lead!";
        document.getElementById('box1').style.color = "red";
        document.getElementById('box2').style.color = "black";
    }
    else if (playerScore < computerScore) {
        document.getElementById('winner').innerHTML = "The computer leads!";
        document.getElementById('box2').style.color = "red";
        document.getElementById('box1').style.color = "black";
    }
    else {
        document.getElementById('winner').innerHTML = "Tie game!";
        document.getElementById('box2').style.color = "black";
        document.getElementById('box1').style.color = "black";
    }
}

function updateWinningMove() {
    if (winner === 'player') {
        document.getElementById('player-move').style.color = 'red';
        document.getElementById('computer-move').style.color = 'black';
    }
    else if (winner === 'computer') {
        document.getElementById('player-move').style.color = 'black';
        document.getElementById('computer-move').style.color = 'red';
    }
    else {
        document.getElementById('player-move').style.color = 'black';
        document.getElementById('computer-move').style.color = 'black';
    }
}

function updateBoxScore() {
    document.getElementById('box1').innerHTML = playerScore;
    document.getElementById('box2').innerHTML = computerScore;
    document.getElementById('box3').innerHTML = ties;
}

function updateLogic() {
    playerMove = moves['player'];
    computerMove = moves['computer'];

    if (playerMove === computerMove) {
        document.getElementById('logic').innerHTML = 'Tie!'
    }
    else if ((playerMove === 'rock' && computerMove === 'scissors') ||
        playerMove === 'scissors' && computerMove === 'rock') {
            document.getElementById('logic').innerHTML = 'Rock beats Scissors!';
        }
    else if ((playerMove === 'paper' && computerMove === 'scissors') || 
        playerMove === 'scissors' && computerMove === 'paper') {
            document.getElementById('logic').innerHTML = 'Scissors beats Paper!';
        }
    else {
        document.getElementById('logic').innerHTML = "Paper beats Rock!";
    }
}

function updateHTML() {
    updateMoves();
    updateWinner();
    updateWinningMove();
    updateBoxScore();
    updateLogic();
}



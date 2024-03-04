const game = new Game();

const buttons = document.querySelectorAll('button');
buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        game.playGame(button.id);
        HTMLUpdater.updateGameStatus(game);
    });
});
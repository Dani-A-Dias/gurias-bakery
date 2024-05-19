window.onload = function () {
	// variables
	const startButton = document.getElementById('start-button');
	const restartButton = document.getElementById('restart-button');
	const selectLevel = document.getElementById('select-level-button');
	const highScores = document.getElementById('game-score-button');
	const newGame = new Game();

	//Event listeners

	startButton.addEventListener('click', function () {
		console.log('Start Button was pressed');
        startGame()
	});
    selectLevel.addEventListener("click", ()=>{
        console.log("Select level pressed")
    })
    highScores.addEventListener("click", ()=>{
        console.log("Check High Scores pressed")
    })
	restartButton.addEventListener('click', () => {
		location.reload();
	});

	document.addEventListener('keydown', (event) => {
		console.log('a key was pressed', event);
		if (event.code === 'ArrowRight') {
			newGame.player.directionX = 6;
		} else if (event.code === 'ArrowLeft') {
			newGame.player.directionX = -6;
		}

    document.addEventListener("keyup", ()=>{
        newGame.player.directionX = 0;

    })
	});

    function startGame(){
        newGame.start()
    }
};

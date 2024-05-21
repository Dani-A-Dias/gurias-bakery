window.onload = function () {
	// variables
	const startButton = document.getElementById('start-button');
	const restartButton = document.getElementById('restart-button');
	const returnButton = document.getElementById('return-button');
	const selectLevel = document.getElementById('select-level-button');
	const highScores = document.getElementById('game-score-button');
	const newGame = new Game();
	const myLevel = new Level();
	//const selectlvl = new Level();

	//Event listeners
	startButton.addEventListener('click', function () {
		console.log('Start Button was pressed');
        startGame()
	});
    selectLevel.addEventListener("click", ()=>{
        console.log("Select level pressed")
		openLevelMenuScreen()
		
    })
	returnButton.addEventListener("click", ()=>{
		console.log("Return btn pressed")
		returnMainMenu()
	})

    highScores.addEventListener("click", ()=>{
        console.log("Check High Scores pressed")
    })
	restartButton.addEventListener('click', () => {
		location.reload();
	});

	document.addEventListener('keydown', (event) => {
		//console.log('a key was pressed', event);
		if (event.code === 'ArrowRight') {
			newGame.player.directionX = 6;
		} else if (event.code === 'ArrowLeft') {
			newGame.player.directionX = -6;
		}

    document.addEventListener("keyup", ()=>{
        newGame.player.directionX = 0;

    })
	});
	//Change Player Appearance
	document.addEventListener("keypress", (event)=>{
		if(event.code === "KeyW"){
			newGame.player.changeImage("images/guriaWW.png");

		} else if(event.code === "KeyG"){
			newGame.player.changeImage("images/guria1.png");

		}else if(event.code === "KeyC"){
			newGame.player.changeImage("images/cannoli.png");

		}else if(event.code === "KeyH"){
			newGame.player.changeImage("images/horus.png");

		}else if(event.code === "KeyN"){
			newGame.player.changeImage("images/neji.png");

		}else if(event.code === "KeyP"){
			newGame.player.changeImage("images/peppo.png");
		}

		else if(event.code === "KeyR"){
			newGame.player.changeImage("images/ra.png");
		}
		
	})
	// Start DA GAME
    function startGame(){
        newGame.start()
    }

	function returnMainMenu(){
        myLevel.returnMainScreen()
    }

	function openLevelMenuScreen(){
        myLevel.openLevelMenu()
    }


};

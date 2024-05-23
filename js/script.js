window.onload = function () {
	// variables
	const startButton = document.getElementById('start-button');
	const restartButton = document.getElementById('restart-button');
	const returnButton = document.getElementById('return-button');
	const gameWonButton = document.getElementById("won-button");
	const selectLevel = document.getElementById('select-level-button');
	const highScores = document.getElementById('game-score-button');
	const highScoreWon = document.getElementById("higscore-button")
	const highScoreReturnBtn = document.getElementById("return-button-scores")
	const newGameStart = document.getElementById("new-start-button")

	const newGame = new Game();
	const myLevel = new Level();


	//Event listeners - Menu
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
		openHighScores()
    })

	highScoreReturnBtn.addEventListener("click", ()=>{
		console.log("Return btn pressed")
		returnMainMenu()
	})

	restartButton.addEventListener('click', () => {
		location.reload();
	});

	//Event listeners - Game Won

	gameWonButton.addEventListener("click", ()=>{
		console.log("Won btn pressed")
		location.reload();
	})

	highScoreWon.addEventListener("click", ()=>{
		console.log("Won highscore btn pressed")
		openHighScores()
		
	})

	newGameStart.addEventListener("click", ()=>{
		console.log("Won new game btn pressed")
	
		startGame()
	})

	//Event listeners - move player

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

	function openHighScores(){
		newGame.openHighScore()
	}


};

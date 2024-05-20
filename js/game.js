class Game {
    constructor(){
        this.startScreen = document.getElementById("game-intro");
        this.gameContainer = document.getElementById("game-container");
        this.gameScreen = document.getElementById("game-screen");
        this.gameOverScreen = document.getElementById("game-over");
        this.height = 700;
        this.width = 960;
        this.timer = 0;
        this.recipe = recipe;
        this.ingredients = [ ];
        this.score = 0
        this.lives = 7
        this.isGameOver = false;
        this.gameIntervalId = null;
        this.gameLoopFrequency = 1000/60;
    }

    start(){
        this.gameScreen.style.height = `${this.height}px`;
        this.gameScreen.style.width = `${this.width}px`;
        this.startScreen.style.display = "none";
        this.gameContainer.style.display = "flex";
        this.gameScreen.style.display = "block";
        this.player = new Player(this.gameScreen, "../images/guria1.png"); 
        this.gameIntervalId = setInterval(() => {
            this.gameLoop();
        }, this.gameLoopFrequency);
    }

    gameLoop(){
        console.log("Inside game loop")
        this.update();        
        if(this.isGameOver){
            clearInterval(this.gameIntervalId);
        }
    }

    update() {
        this.player.move();
    }
}
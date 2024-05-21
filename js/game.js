class Game {
    constructor() {
        this.startScreen = document.getElementById("game-intro");
        this.gameContainer = document.getElementById("game-container");
        this.gameScreen = document.getElementById("game-screen");
        this.gameOverScreen = document.getElementById("game-over");
        this.levelChoice = new Level();
        this.player = new Player(this.gameScreen, "../images/guria1.png");
        this.height = 700;
        this.width = 960;
        this.timer = 0;
        this.score = 0;
        this.lives = 7;
        this.isGameOver = false;
        this.gameIntervalId = null;
        this.gameLoopFrequency = 1000 / 60;
        
        // Definindo os elementos após o carregamento da página
        this.elementRecipeName = document.getElementById("recipe");
        this.elementRecipeIngredients = document.getElementById("ingredients");
        this.setRecipe(this.levelChoice.selectedLevel);
        this.displayRecipe();
    }

    setRecipe(level) {
        this.recipe = new Recipe(level);
    }

    start() {
        if (!this.levelChoice.selectedLevel) {
            this.setDefaultRecipe();
        } else {
            this.setRecipe(this.levelChoice.selectedLevel);
        }
        this.gameScreen.style.height = `${this.height}px`;
        this.gameScreen.style.width = `${this.width}px`;
        this.startScreen.style.display = "none";
        this.gameContainer.style.display = "flex";
        this.gameScreen.style.display = "block";
        this.gameIntervalId = setInterval(() => {
            this.gameLoop();
        }, this.gameLoopFrequency);
        this.displayRecipe();
    }

    setDefaultRecipe() {
        this.setRecipe("easy");
    }

    gameLoop() {
        console.log("Inside game loop");
        this.update();
        if (this.isGameOver) {
            clearInterval(this.gameIntervalId);
        }
    }

    update() {
        this.player.move();
    }

    displayRecipe() {
        if (!this.elementRecipeName || !this.elementRecipeIngredients) {
            return;
        }
        const recipeDisplay = this.recipe.recipe;
        this.elementRecipeName.innerText = recipeDisplay.name;
        this.elementRecipeIngredients.innerHTML = "";

        this.recipe.ingredients.forEach((ingredient) => {
            const liLine = document.createElement("li");
            liLine.innerText = `${ingredient.name}: ${ingredient.collected}/${ingredient.quantityNeeded}`;
            this.elementRecipeIngredients.appendChild(liLine);
        });
    }

    updateDisplayRecipe() {
        if (!this.elementRecipeIngredients) {
            return;
        }
        this.elementRecipeIngredients.innerHTML = ""; // Clear existing list

        this.recipe.ingredients.forEach((ingredient) => {
            const liLine = document.createElement("li");
            liLine.innerText = `${ingredient.name}: ${ingredient.collected}/${ingredient.quantityNeeded}`;
            this.elementRecipeIngredients.appendChild(liLine);
        });
    }
}

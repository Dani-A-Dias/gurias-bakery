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
        this.timer = 30000; // 30 seconds for the game duration
        this.score = 0;
        this.lives = 7;
        this.isGameOver = false;
        this.gameIntervalId = null;
        this.gameLoopFrequency = 1000 / 60;
        this.lastIngredientTime = 0;
        this.ingredientInterval = 2000; // create a new ingredient every 2 seconds
        this.ingredients = [];
        this.elementRecipeName = document.getElementById("recipe");
        this.elementRecipeIngredients = document.getElementById("ingredients");

        this.setRecipe(this.levelChoice.selectedLevel);
        this.displayRecipe();
    }

    setRecipe(level) {
        this.recipe = new Recipe(level, this.gameContainer);
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
        this.startTime = Date.now();
        this.gameIntervalId = setInterval(() => this.gameLoop(), this.gameLoopFrequency);
        this.displayRecipe();
    }

    setDefaultRecipe() {
        this.setRecipe("easy");
    }

    gameLoop() {
        const now = Date.now();
        const elapsedTime = now - this.startTime;

        if (elapsedTime >= this.timer) {
            this.isGameOver = true;
            this.endGame();
            return;
        }

        if (now - this.lastIngredientTime > this.ingredientInterval) {
            this.createNewIngredient();
            this.lastIngredientTime = now;
        }

        this.update();
        this.displayRecipe();

        if (this.isGameOver) {
            clearInterval(this.gameIntervalId);
        }
    }

    update() {
        this.player.move();
        this.ingredients.forEach(ingredient => ingredient.updatePosition());
        this.removeOffscreenIngredients();
    }

    createNewIngredient() {
        const ingredientData = this.recipe.getRandomIngredientData();
        const newIngredient = new Ingredient(
            this.gameScreen,
            ingredientData.name,
            ingredientData.points,
            ingredientData.quantityNeeded,
            ingredientData.speed,
            ingredientData.imageIngr
        );
        this.ingredients.push(newIngredient);
    }

    removeOffscreenIngredients() {
        this.ingredients = this.ingredients.filter(ingredient => {
            if (ingredient.top > this.gameScreen.clientHeight || this.isGameOver) {
                ingredient.remove();
                return false;
            }
            return true;
        });
    }

    endGame() {
        console.log("Game Over");
        this.removeOffscreenIngredients();
        this.gameContainer.style.display = "none";
        this.gameScreen.style.display = "none";
        this.gameOverScreen.style.display = "block";
    }

    displayRecipe() {
        if (!this.elementRecipeName || !this.elementRecipeIngredients) return;

        const ingr = this.recipe.ingredientsAll;
        const recipeDisplay = this.recipe.recipe;
        this.elementRecipeName.innerText = `${recipeDisplay.name}`;
        this.elementRecipeIngredients.innerHTML = "";

        ingr.forEach(ingredient => {
            const liLine = document.createElement("li");
            liLine.innerText = `${ingredient.name}: ${ingredient.collected} / ${ingredient.quantityNeeded}`;
            this.elementRecipeIngredients.appendChild(liLine);
        });
    }
}
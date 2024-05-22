class Game {
    constructor() {
        this.startScreen = document.getElementById("game-intro");
        this.gameContainer = document.getElementById("game-container");
        this.gameScreen = document.getElementById("game-screen");
        this.gameOverScreen = document.getElementById("game-over");
        this.gameOverScreenGood = document.getElementById("game-over-good");
        this.levelChoice = new Level();
        this.player = new Player(this.gameScreen, "./images/guria1.png");
        this.height = 700;
        this.width = 960;
        this.timeDefault = 120; // 180 seconds for the game duration - only while testing
        this.timerElement = document.getElementById("timer")
        this.timerIntervalId = null;
        this.score = 0;
        this.isGameOver = false;
        this.gameIntervalId = null;
        this.gameLoopFrequency = 1000 / 60;
        this.lastIngredientTime = 0;
        this.ingredientInterval = 2000; // create a new ingredient every 2 seconds
        this.ingredients = [];
        this.elementRecipeName = document.getElementById("recipe");
        this.elementRecipeIngredients = document.getElementById("ingredients");
        this.scoreTotal = document.getElementById("score")

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
    this.gameOverScreenGood.style.display = "none";
    this.gameContainer.style.display = "flex";
    this.gameScreen.style.display = "block";
    this.setTimer(this.levelChoice.gameDuration || this.timeDefault); 
    this.gameIntervalId = setInterval(() => this.gameLoop(), this.gameLoopFrequency);
    this.displayRecipe();
}

    setDefaultRecipe() {
        this.setRecipe("easy");
    }

    gameLoop() {
        const now = Date.now();
    
        if (now - this.lastIngredientTime > this.ingredientInterval) {
            this.createNewIngredient();
            this.lastIngredientTime = now;
        }
    
        this.update();
        this.displayRecipe();
        this.updateDisplayRecipe();
    
        if (this.isGameOver) {
            clearInterval(this.gameIntervalId);
        }
    }

    setTimer(duration){        
       let timeRemanining=duration;
       this.updateTimerDisplay(timeRemanining);
        
       this.timerIntervalId = setInterval(()=>{
            if(timeRemanining > 0){
                timeRemanining--
                this.updateTimerDisplay(timeRemanining);
                
            }else{
                clearInterval(this.timerIntervalId)
                this.isGameOver = true;
                this.endGame();
                return;
            }
        },1000)
        
        
    }

    updateTimerDisplay(timeOfGame){
        const minutes = Math.floor(timeOfGame / 60).toString().padStart(2, "0");
        const seconds = (timeOfGame % 60).toString().padStart(2, "0");
        this.timerElement.innerText = `${minutes}:${seconds}`;
    }

    update() {
        this.player.move();
        this.ingredients.forEach(ingredient => {
            ingredient.updatePosition();
            
            if (this.player.IngredientCaught(ingredient)) {                
                this.score += ingredient.points;
                this.scoreTotal.innerText = this.score;
                ingredient.collect(); 
                this.updateIngredientCounter(ingredient.name); 
                ingredient.remove(); 
            }

          
        });
        
        this.removeOffscreenIngredients();
        this.checkIfAllIngredientsCollected();
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
            if (ingredient.top > 650) {
                if(!ingredient.collected){                    
                this.score -=10
                this.scoreTotal.innerText = this.score;
                }
                ingredient.remove();
                return false;
            }else if(this.isGameOver){
                ingredient.remove();
            }
            return true;
        });
    }

    updateIngredientCounter(ingredientName) {
        const ingr = this.recipe.ingredientsAll.find(ingr => ingr.name === ingredientName);
        if (ingr) {
            ingr.collected++; 
            this.displayRecipe(); 
        }
    }

    checkIfAllIngredientsCollected() {
        const allCollected = this.recipe.ingredientsAll.every(ingredient => ingredient.collected >= ingredient.quantityNeeded);
        if (allCollected) {
            this.gameWon();
        }
    }

    endGame() {
        console.log("Game Over");
        this.removeOffscreenIngredients();
        this.gameContainer.style.display = "none";
        this.gameScreen.style.display = "none";
        this.gameOverScreen.style.display = "flex";
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

    updateDisplayRecipe() {
        if (!this.elementRecipeIngredients) return;
        this.elementRecipeIngredients.innerHTML = "";
        const ingr = this.recipe.ingredientsAll;
        ingr.forEach(ingredient => {
            const liLine = document.createElement("li");
            liLine.innerText = `${ingredient.name}: ${ingredient.collected} / ${ingredient.quantityNeeded}`;
            this.elementRecipeIngredients.appendChild(liLine);
        });
    }

    gameWon(){
        clearInterval(this.timerIntervalId);
        this.removeOffscreenIngredients();
        this.gameContainer.style.display = "none";
        this.gameScreen.style.display = "none";
        this.gameOverScreen.style.display = "none";
        this.gameOverScreenGood.style.display = "block";

    }
}
# Guria's Bakery

[Click here to see deployed game](https://dani-a-dias.github.io/gurias-bakery/)

## Description
Guria's Bakery is a fun and engaging game where you control Guria, an adorable cat baker. Your objective is to help Guria collect ingredients falling from the sky to bake delicious recipes. The game features various levels of difficulty, different backgrounds, and an increasing challenge as you progress.

## The Inspiration
My cat Guria is my source of inspiration for this game. She is always "making biscuits" and since I love baking, I decided to join the two into a simple yet fun game!
<br> 
<details>
<summary>Guria</summary>
<br>
<img src="../gurias-bakery/images/Guria.jpg" width="300"/>
</details>
<br>

## MVP
The Minimum Viable Product (MVP) for Guria's Bakery includes:
<ul>
<li>A playable character that can move left and right.
<li>Falling ingredients that need to be collected.
<li>A scoring system that rewards players for collecting ingredients.
<li>A start screen, a game screen, and an end screen.
<li>Countdown that if reaches zero before completing the recipe, the player loses. 

</ul>

## Backlog
Features to implement after the MVP:
<ul>
<li>High score tracking and leaderboard.
<li>Sound effects and background music.
<li>Additional levels with increasing difficulty. Three different backgrounds that change based on the game's difficulty.
<li>Coleagues cats as easter eggs (different player image)
<li>Achievements and rewards for completing specific tasks.
</ul>


## Data structure - ATUALIZAR DEPOIS PORQUE ISTO É SÓ IDEIAS AINDA!!!!
<h2>Classes and Methods:</h2>

<h3>Game:</h3>
<ol>
<li>constructor()
<li>setRecipe(level)
<li>start()
<li>setDefaultRecipe()
<li>gameLoop()
<li>setTimer(duration)
<li>updateTimerDisplay(timeOfGame)
<li>update()
<li>createNewIngredient()
<li>removeOffscreenIngredients()
<li>updateIngredientCounter(ingredientName)
<li>checkIfAllIngredientsCollected()
<li>displayRecipe()
<li>updateDisplayRecipe()
<li>endGame()
<li>gameWon()
</ol>

<h3>Player:</h3>
<ol>
<li>constructor(gameScreen, playerImage)
<li>move()
<li>updatePosition()
<li>calculateMarginWidth()
<li>changeImage(newImgSrc)
<li>IngredientCaught(ingredient)
</ol>

<h3>Ingredient:</h3>
<ol>
<li>constructor(gameScreen, name, points, quantityNeeded, speed, imageIngr)
<li>collect()
<li>updatePosition()
<li>remove()
</ol>

<h3>Recipe:</h3> 
<ol>
<li>constructor(level, gameScreen)
<li>selectRandomRecipe()
<li>initIngredients()
<li>getRandomIngredientData()
</ol>

<h3>Level:</h3> 
<ol>
<li>constructor()
<li>changeLevel()
<li>openLevelMenu()
<li>returnMainScreen()
</ol>

## States y States Transitions

<strong>Start Screen:</strong><br>
Transition: Start button clicked -> Game Screen.

<strong>Game Screen:</strong><br>
Transition: Player runs out of time or completes the level -> End Screen.

<strong>End Screen:</strong><br>
Transition: Restart button clicked -> Start Screen.

## Tasks
<ol>
<li>Set up the project repository on GitHub.
<li>Create the basic HTML structure and link CSS and JS files.
<li>Design and implement the start screen.
<li>Implement the player character (Guria) and its movement.
<li>Create the ingredients and their falling logic.
<li>Develop the scoring system.
<li>Implement state transitions between Start, Game, and End screens.
<li>Add three different backgrounds and logic to change them.
<li>Test the game for bugs and ensure smooth gameplay.
<li>Polish the UI and add visual feedback for actions.
<li>Add sound effects and background music.
<li>Deploy the game on GitHub Pages.
<li>Create a presentation (slides) for the project.
</ol>

## Links

- [Trello Link](https://trello.com)
- [Slides Link](http://slides.com)
- [Github repository Link](http://github.com)
- [Deployment Link](http://github.com)
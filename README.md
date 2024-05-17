# Guria's Bakery

[Click here to see deployed game](http://github.com)

## Description
Guria's Bakery is a fun and engaging game where you control Guria, an adorable cat baker. Your objective is to help Guria collect ingredients falling from the sky to bake delicious cookies. The game features various levels of difficulty, different backgrounds, and an increasing challenge as you progress.

## The Inspiration
My cat Guria is my source of inspiration for this game. She is always "making biscuits" and since I love baking, I decided to join the two into a simple yet fun game!
<br> 
<img src="../gurias-bakery/images/Guria.jpg" width="300"/>
<br>

## MVP
The Minimum Viable Product (MVP) for Guria's Bakery includes:
<ul>
<li>A playable character that can move left and right.
<li>Falling ingredients that need to be collected.
<li>A scoring system that rewards players for collecting ingredients.
<li>Three different backgrounds that change based on the game's difficulty.
<li>Sound effects and background music.
<li>High score tracking and leaderboard.
<li>A start screen, a game screen, and an end screen.
<li>Countdown that if reaches zero before completing the recipe, the player loses. 
<li>Coleagues cats as easter eggs (different player image)
</ul>

## Backlog
Features to implement after the MVP:
<ul>
<li>Power-ups and bonuses (e.g., speed boost, extra points).
<li>Obstacles like rats that steal ingredients.
<li>Additional levels with increasing difficulty.
<li>Achievements and rewards for completing specific tasks.
</ul>


## Data structure - ATUALIZAR DEPOIS PORQUE ISTO É SÓ IDEIAS AINDA!!!!
<h2>Classes and Methods:</h2>

<h3>Game:</h3>
<ol>
<li>constructor()
<li>startGame()
<li>update()
<li>checkCollisions()
<li>endGame()
</ol>

<h3>Player:</h3>
<ol>
<li>constructor(gameScreen, width, height, playerImage)
<li>move()
<li>updatePosition()
</ol>

<h3>Ingredient:</h3>
<ol>
<li>constructor(gameScreen)
<li>move()
<li>updatePosition()
</ol>

<h3>Obstacle (optional):</h3> //Não sei se vou fazer
<ol>
<li>constructor(gameScreen)
<li>move()
<li>updatePosition()
</ol>

## States y States Transitions

<strong>Start Screen:</strong><br>
Transition: Start button clicked -> Game Screen.

<strong>Game Screen:</strong><br>
Transition: Player loses all lives or completes the level -> End Screen.

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
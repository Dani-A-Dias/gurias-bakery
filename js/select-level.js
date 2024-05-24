class Level {
    constructor() {
        this.startScreen = document.getElementById("game-intro");
        this.gameScoresList = document.getElementById("high-scores-room")
        this.selectLevelBackground = document.querySelector(".background-for-hs-sl");
        this.selectLevelScreen = document.getElementById("select-lvl");
        this.textDescriptionLevel = document.getElementById("level-text");
        this.selectedLevel = 'easy'; 
        this.gameDuration= 120;
        this.ingredientInterval = 2000;
        this.changeLevel(); 
        this.musicDefault = new Audio('assets/kitchen-level-song.mp3');
        this.musicDefault.loop = true; 
        this.backMusic = this.musicDefault;
        this.levelTwoSong = new Audio('assets/streetlevelmusic.mp3');
        this.levelTwoSong.loop = true; 
        this.levelThreeSong = new Audio('assets/water-level-song.mp3');
        this.levelThreeSong.loop = true;
    }

    changeLevel() {
        const easyMode = document.getElementById("lvl1-button");
        const mediumMode = document.getElementById("lvl2-button");
        const hardMode = document.getElementById("lvl3-button");
        const gameBackImage = document.getElementById("game-container");
        const gameSmallImage = document.getElementById("smallImgBack");
        const containerDivs = document.querySelectorAll('#game-container div');
        const containerH2 = document.querySelectorAll('#game-container h2');
        

        easyMode.addEventListener("click", () => {
            //console.log("1lvl pressed");
            this.textDescriptionLevel.innerText = "Level 1: Less ingredients to catch but more time to do it!";
            gameBackImage.style.backgroundImage = "url('./images/kitchenlevel.png')";
            this.gameDuration= 120
            this.ingredientInterval = 1500;
            containerDivs.forEach(containerDiv => {
                containerDiv.style.border = '2px solid #e56d89';
                containerDiv.style.background = '#f4dbd6';
            });
            containerH2.forEach((textH2)=>{
                textH2.style.color = "#fdb6b6"
            });
            gameSmallImage.src = "images/kitchenlevel.png";
            this.selectedLevel = 'easy'; 
            this.backMusic = this.musicDefault;
        });

        mediumMode.addEventListener("click", () => {
            //console.log("2lvl btn pressed");
            this.textDescriptionLevel.innerText = "Level 2: You need more ingredients to make your recipe but you still have plenty of time to do it!";
            gameBackImage.style.backgroundImage = "url('./images/streetlevel.png')";
            this.gameDuration= 100
            this.ingredientInterval = 800;
            containerDivs.forEach(containerDiv => {
                containerDiv.style.border = '2px solid #438646';
                containerDiv.style.background = '#b3d8bc';
            });
            containerH2.forEach((textH2)=>{
                textH2.style.color = "#438646"
            });
            gameSmallImage.src = "images/streetlevel.png";
            this.selectedLevel = 'medium'; 
            this.backMusic = this.levelTwoSong;
        });

        hardMode.addEventListener("click", () => {
            //console.log("3lvl btn pressed");
            this.textDescriptionLevel.innerText = "Level 3: Let's make some cat-sushi! You have less time, but double the fun!";
            gameBackImage.style.backgroundImage = "url('./images/waterlevel.png')";
            this.gameDuration= 80
            this.ingredientInterval = 1000;
            containerDivs.forEach(containerDiv => {
                containerDiv.style.border = '2px solid #174981';
                containerDiv.style.background = '#b8e3ff';
            });
            containerH2.forEach((textH2)=>{
                textH2.style.color = "#174981"
            });
            gameSmallImage.src = "images/waterlevel.png";
            this.selectedLevel = 'hard'; 
            this.backMusic = this.levelThreeSong;
        });
    }

    openLevelMenu() {
        this.startScreen.style.display = "none";
        this.gameScoresList.style.display = "none";
        this.selectLevelScreen.style.display = "flex";
        this.selectLevelBackground.style.display = "flex";
    }

    returnMainScreen() {
        this.startScreen.style.display = "flex";
        this.selectLevelScreen.style.display = "none";
        this.gameScoresList.style.display = "none";
        this.selectLevelBackground.style.display = "none";
    }

    getBackgroundMusic() {
        return this.backMusic;
    }
}
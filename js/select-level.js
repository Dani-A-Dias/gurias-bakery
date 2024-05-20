class Level{
    constructor(){
        this.startScreen = document.getElementById("game-intro");
        this.selectLevelScreen = document.getElementById("select-lvl");
        this.textDescriptionLevel = document.getElementById("level-text");
        
        this.changeLevel(); 
    }


    changeLevel(){//EasyMode, Medium Mode e Hard Mode
        const easyMode = document.getElementById("lvl1-button");
        const mediumMode =document.getElementById("lvl2-button");
        const hardMode = document.getElementById("lvl3-button");
        const gameBackImage = document.getElementById("game-container");
        const gameSmallImage = document.getElementById("smallImgBack");
              
        easyMode.addEventListener("click", ()=>{
            console.log("1lvl pressed")
            this.textDescriptionLevel.innerText = "Level 1: Less ingredients to catch but more time to do it!"
            gameBackImage.style.backgroundImage = "url('../images/kitchenlevel.png')"
            gameSmallImage.src="images/kitchenlevel.png"
        })
        mediumMode.addEventListener("click", ()=>{
            console.log("2lvl btn pressed")
            this.textDescriptionLevel.innerText = "Level 2: You need more ingredients to make your recipe but you still have plenty of time to do it!"
            gameBackImage.style.backgroundImage = "url('../images/streetlevel.png')"
            gameSmallImage.src="images/streetlevel.png"
        })
        hardMode.addEventListener("click", ()=>{
            console.log("3lvl btn pressed")
            this.textDescriptionLevel.innerText = "Level 3git pull: Let's make some cat-sushi! You have less time, but double the fun!"
            gameBackImage.style.backgroundImage = "url('../images/waterlevel.png')"
            gameSmallImage.src="images/waterlevel.png"
        })

        

    }
    openLevelMenu(){
        this.startScreen.style.display = "none";
        this.selectLevelScreen.style.display = "flex";
    }

    returnMainScreen(){
        this.startScreen.style.display = "flex";
        this.selectLevelScreen.style.display = "none";
    }
}
class Player{
    constructor(gameScreen, width, height, top, left, playerImage){
    this.gameScreen = gameScreen
    this.left = left - (width/2)
    this.top = top;
    this.width = width;
    this.height = height;
    this.directionX = 0;
    this.element = document.createElement("img")
    this.element.src = playerImage;
    this.element.style.position = "absolute"
    this.element.style.height = `${this.height}px`
    this.element.style.width = `${this.width}px`
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`; 
    this.gameScreen.appendChild(this.element)
    }
    
    move(){
        this.left += this.directionX
        this.updatePosition()
     }
    
    updatePosition(){
        this.element.style.left = `${this.left}px`;   
    }
}
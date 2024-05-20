class Player {
    constructor(gameScreen, playerImage) {
      this.gameScreen = gameScreen;
      this.marginWidth = this.calculateMarginWidth();
      this.finalMarginW = this.marginWidth/2
      this.width = 240;
      this.height = 240;
      this.left = 480-120 + this.finalMarginW;
      this.top = 700 - this.height - 10;
      this.directionX = 0;
      this.element = document.createElement("img");
      this.element.src = playerImage;
      this.element.style.position = "absolute";
      this.element.style.height = `${this.height}px`;
      this.element.style.width = `${this.width}px`;
      this.element.style.left = `${this.left}px`;
      this.element.style.top = `${this.top}px`;
      this.gameScreen.appendChild(this.element);
 
    }

     move() {
      this.left += this.directionX;
  
      if (this.left < this.finalMarginW) {
        this.left = this.finalMarginW;
      } else if (this.left + this.width > 960+this.finalMarginW) {
        this.left = 960+this.finalMarginW-this.width
      }
      this.updatePosition();
      console.log(this.finalMarginW)
      console.log(this.marginWidth)
    }
  
    updatePosition() {
      this.element.style.left = `${this.left}px`;
      
    }

    calculateMarginWidth() {
        const bodyThing = document.querySelector("body")
        const computedStyle = window.getComputedStyle(bodyThing);
        return parseFloat(computedStyle.marginLeft) + parseFloat(computedStyle.marginRight);
    }

    changeImage(newImgSrc){
        this.element.src = newImgSrc;
    }
  }
const recipes = {
    easy: [
        {
            name: "Banana Bread",
            ingredients: {
                "Banana": { points: 50, quantityNeeded: 3, speed: 4, imageIngr: "./images/banana.png" },
                "Flour": { points: 50, quantityNeeded: 3, speed: 5, imageIngr: "./images/flour.png" },
                "Eggs": { points: 50, quantityNeeded: 4, speed: 4, imageIngr: "./images/egg.png" },
                "Butter": { points: 100, quantityNeeded: 5, speed: 6, imageIngr: "./images/butter.png" },
                "Honey": { points: 50, quantityNeeded: 4, speed: 5, imageIngr: "./images/honey.png" }
            }
        },
        {
            name: "Honey Biscuits",
            ingredients: {
                "Egg": { points: 50, quantityNeeded: 5, speed: 5, imageIngr: "./images/egg.png" },
                "Flour": { points: 50, quantityNeeded: 5, speed: 4, imageIngr: "./images/flour.png" },
                "Honey": { points: 50, quantityNeeded: 5, speed: 3, imageIngr: "./images/honey.png" },
                "Butter": { points: 50, quantityNeeded: 5, speed: 5, imageIngr: "./images/butter.png" }
            }
        },
        {
            name: "Sweet Muffins",
            ingredients: {
                "Egg": { points: 75, quantityNeeded: 4, speed: 4, imageIngr: "./images/egg.png" },
                "Flour": { points: 75, quantityNeeded: 5, speed: 5, imageIngr: "./images/flour.png" },
                "Banana": { points: 50, quantityNeeded: 7, speed: 6, imageIngr: "./images/banana.png" },
                "Honey": { points: 50, quantityNeeded: 4, speed: 4, imageIngr: "./images/honey.png" }
            }
        }
    ],
    medium: [
        {
            name: "Chicken Dumplings",
            ingredients: {
                "Flour": { points: 75, quantityNeeded: 6, speed: 5, imageIngr: "./images/flour.png" },
                "Butter": { points: 75, quantityNeeded: 5, speed: 5, imageIngr: "./images/butter.png" },
                "Chicken": { points: 100, quantityNeeded: 3, speed: 5, imageIngr: "./images/chicken.png" },
                "Egg": { points: 50, quantityNeeded: 7, speed: 5, imageIngr: "./images/egg.png" }
            }
        },
        {
            name: "Spring Rolls",
            ingredients: {
                "Flour": { points: 50, quantityNeeded: 7, speed: 5, imageIngr: "./images/flour.png" },
                "Butter": { points: 75, quantityNeeded: 5, speed: 6, imageIngr: "./images/butter.png" },
                "Carrot": { points: 50, quantityNeeded: 8, speed: 6, imageIngr: "./images/carrot.png" },
                "Egg": { points: 75, quantityNeeded: 6, speed: 4, imageIngr: "./images/egg.png" }
            }
        },
        {
            name: "Fried Rice",
            ingredients: {
                "Rice": { points: 100, quantityNeeded: 3, speed: 4, imageIngr: "./images/rice.png" },
                "Egg": { points: 75, quantityNeeded: 7, speed: 4, imageIngr: "./images/egg.png" },
                "Carrot": { points: 75, quantityNeeded: 7, speed: 4, imageIngr: "./images/carrot.png" },
                "Chicken": { points: 75, quantityNeeded: 7, speed: 4, imageIngr: "./images/chicken.png" }
            }
        }
    ],
    hard: [
        {
            name: "Sushi",
            ingredients: {
                "Rice": { points: 150, quantityNeeded: 5, speed: 6, imageIngr: "./images/rice.png" },
                "Salmon": { points: 100, quantityNeeded: 7, speed: 6, imageIngr: "./images/salmon.png" },
                "Seaweed": { points: 100, quantityNeeded: 7, speed: 6, imageIngr: "./images/seaweed.png" },
                "Cucumber": { points: 75, quantityNeeded: 9, speed: 6, imageIngr: "./images/cucumber.png" }
            }
        },
        {
            name: "Sashimi",
            ingredients: {
                "Salmon": { points: 150, quantityNeeded: 7, speed: 7, imageIngr: "./images/salmon.png" },
                "Tuna": { points: 150, quantityNeeded: 7, speed: 7, imageIngr: "./images/tuna.png" }
            }
        },
        {
            name: "Nigiri",
            ingredients: {
                "Rice": { points: 150, quantityNeeded: 5, speed: 7, imageIngr: "./images/rice.png" },
                "Salmon": { points: 100, quantityNeeded: 5, speed: 5, imageIngr: "./images/salmon.png" },
                "Tuna": { points: 75, quantityNeeded: 7, speed: 6, imageIngr: "./images/tuna.png" },
                "Seaweed": { points: 100, quantityNeeded: 7, speed: 5, imageIngr: "./images/seaweed.png" },
                "Cucumber": { points: 75, quantityNeeded: 8, speed: 6, imageIngr: "./images/cucumber.png" }
            }
        }
    ]
};
class Ingredient {
    constructor(gameScreen, name, points, quantityNeeded, speed, imageIngr) {
        this.gameScreen = gameScreen;
        this.name = name;
        this.points = points;
        this.quantityNeeded = quantityNeeded;
        this.collected = 0;
        this.speed = speed;
        this.width = 50;
        this.height = 50;
        this.marginWidth = this.calculateMarginWidth();
        this.finalMarginW = this.marginWidth / 2;
        this.left = (140 + this.finalMarginW) + Math.random() * ((720 + this.finalMarginW) - (150 + this.finalMarginW));
        this.top = 0;
        this.element = document.createElement("img");
        this.element.src = imageIngr;
        this.element.style.position = "absolute";
        this.element.style.height = `${this.height}px`;
        this.element.style.width = `${this.width}px`;
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
        this.gameScreen.appendChild(this.element);
    }

    collect() {
        this.collected++;
    }

     calculateMarginWidth() {
        let bodyThing = document.querySelector("body");
        let computedStyle = window.getComputedStyle(bodyThing);
        return parseFloat(computedStyle.marginLeft) + parseFloat(computedStyle.marginRight);
    }

    updatePosition() {
        this.top += this.speed;
        this.element.style.top = `${this.top}px`;

        if (this.top > this.gameScreen.clientHeight) {
            this.remove();
        }
    }

    remove() {
        if (this.element.parentElement) {
            this.element.parentElement.removeChild(this.element);
        }
    }
}

class Recipe {
    constructor(level, gameScreen) {
        this.level = level;
        this.gameScreen = gameScreen;
        this.recipe = this.selectRandomRecipe();
        this.ingredientsAll = this.initIngredients();
    }

    selectRandomRecipe() {
        const randomRecipes = recipes[this.level];
        if (!randomRecipes || randomRecipes.length === 0) {
            throw new Error(`No recipes available for level: ${this.level}`);
        }
        const randomIndex = Math.floor(Math.random() * randomRecipes.length);
        return randomRecipes[randomIndex];
    }

    initIngredients() { //this is the love of my life
        const ingredients = this.recipe.ingredients;
        return Object.keys(ingredients).map(name => ({
            name,
            ...ingredients[name],
            collected: 0 
        }));
    }

    getRandomIngredientData() {
        const randomIndex = Math.floor(Math.random() * this.ingredientsAll.length);
        return this.ingredientsAll[randomIndex];
    }
}
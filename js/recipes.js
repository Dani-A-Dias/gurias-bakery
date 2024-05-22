const recipes = {
    easy: [
        {
            name: "Banana Biscuits",
            ingredients: {
                "Banana": { points: 50, quantity: 4, speed: 4, imageIngr: "../images/banana.png" },
                "Flour": { points: 50, quantity: 4, speed: 4, imageIngr: "../images/flour.png" },
                "Egg": { points: 50, quantity: 4, speed: 4, imageIngr: "../images/egg.png" },
                "Butter": { points: 50, quantity: 4, speed: 4, imageIngr: "../images/butter.png" },
                "Honey": { points: 50, quantity: 4, speed: 4, imageIngr: "../images/honey.png" }
            }
        },
        {
            name: "Pancakes",
            ingredients: {
                "Egg": { points: 50, quantity: 4, speed: 4, imageIngr: "../images/egg.png" },
                "Flour": { points: 50, quantity: 4, speed: 4, imageIngr: "../images/flour.png" },
                "Honey": { points: 50, quantity: 4, speed: 4, imageIngr: "../images/honey.png" },
                "Butter": { points: 50, quantity: 4, speed: 4, imageIngr: "../images/butter.png" }
            }
        },
        {
            name: "Muffins",
            ingredients: {
                "Egg": { points: 50, quantity: 4, speed: 4, imageIngr: "../images/egg.png" },
                "Flour": { points: 50, quantity: 4, speed: 4, imageIngr: "../images/flour.png" },
                "Banana": { points: 50, quantity: 4, speed: 4, imageIngr: "../images/banana.png" },
                "Honey": { points: 50, quantity: 4, speed: 4, imageIngr: "../images/honey.png" }
            }
        }
    ],
    medium: [
        {
            name: "Chicken Dumplings",
            ingredients: {
                "Flour": { points: 50, quantity: 4, speed: 4, imageIngr: "../images/flour.png" },
                "Butter": { points: 50, quantity: 4, speed: 4, imageIngr: "../images/butter.png" },
                "Chicken": { points: 50, quantity: 4, speed: 4, imageIngr: "../images/chicken.png" },
                "Egg": { points: 50, quantity: 4, speed: 4, imageIngr: "../images/egg.png" }
            }
        },
        {
            name: "Spring Rolls",
            ingredients: {
                "Flour": { points: 50, quantity: 4, speed: 4, imageIngr: "../images/flour.png" },
                "Butter": { points: 50, quantity: 4, speed: 4, imageIngr: "../images/butter.png" },
                "Carrot": { points: 50, quantity: 4, speed: 4, imageIngr: "../images/carrot.png" },
                "Egg": { points: 50, quantity: 4, speed: 4, imageIngr: "../images/egg.png" }
            }
        },
        {
            name: "Fried Rice",
            ingredients: {
                "Rice": { points: 50, quantity: 4, speed: 4, imageIngr: "../images/rice.png" },
                "Egg": { points: 50, quantity: 4, speed: 4, imageIngr: "../images/egg.png" },
                "Carrot": { points: 50, quantity: 4, speed: 4, imageIngr: "../images/carrot.png" },
                "Chicken": { points: 50, quantity: 4, speed: 4, imageIngr: "../images/chicken.png" }
            }
        }
    ],
    hard: [
        {
            name: "Sushi",
            ingredients: {
                "Rice": { points: 50, quantity: 4, speed: 4, imageIngr: "../images/rice.png" },
                "Salmon": { points: 50, quantity: 4, speed: 4, imageIngr: "../images/salmon.png" },
                "Seaweed": { points: 50, quantity: 4, speed: 4, imageIngr: "../images/seaweed.png" },
                "Cucumber": { points: 50, quantity: 4, speed: 4, imageIngr: "../images/cucumber.png" }
            }
        },
        {
            name: "Sashimi",
            ingredients: {
                "Salmon": { points: 50, quantity: 4, speed: 4, imageIngr: "../images/salmon.png" },
                "Tuna": { points: 50, quantity: 4, speed: 4, imageIngr: "../images/tuna.png" }
            }
        },
        {
            name: "Nigiri",
            ingredients: {
                "Rice": { points: 50, quantity: 4, speed: 4, imageIngr: "../images/rice.png" },
                "Salmon": { points: 50, quantity: 4, speed: 4, imageIngr: "../images/salmon.png" },
                "Tuna": { points: 50, quantity: 4, speed: 4, imageIngr: "../images/tuna.png" },
                "Seaweed": { points: 50, quantity: 4, speed: 4, imageIngr: "../images/seaweed.png" },
                "Cucumber": { points: 50, quantity: 4, speed: 4, imageIngr: "../images/cucumber.png" }
            }
        }
    ]
};
class Ingredients {
    constructor(gameScreen, name, points, quantityNeeded, speed, imageIngr) {
        this.gameScreen = gameScreen; 
        this.name = name;
        this.points = points;
        this.quantityNeeded = quantityNeeded;
        this.collected = 0;
        this.speed = speed;
        this.width = 50;
        this.height = 50;
        this.directionX = 0;
        this.directionY = 0;
        this.marginWidth = this.calculateMarginWidth();
        this.finalMarginW = this.marginWidth/2
        this.positionArr = [(30+this.finalMarginW), (900+this.finalMarginW)];
        this.randomIndex = Math.floor(Math.random()*this.positionArr.length)
        this.left = this.positionArr[this.randomIndex]
        this.element = document.createElement("img");
        this.element.src = imageIngr;
        this.element.style.position = "absolute";
        this.element.style.height = `${this.height}px`;
        this.element.style.width = `${this.width}px`;
        this.element.style.left = `${this.left}px`;
        this.gameScreen.appendChild(this.element);
    }

    collect() {
        this.collected++;
    }

    quantityComplete() {
        return this.collected >= this.quantityNeeded;
    }

    calculateMarginWidth() {
        let bodyThing = document.querySelector("body")
        let computedStyle = window.getComputedStyle(bodyThing);
        return parseFloat(computedStyle.marginLeft) + parseFloat(computedStyle.marginRight);
    }
}

class Recipe {
    constructor(level, gameScreen) {
        this.level = level;
        this.recipe = this.selectRandomRecipe();
        this.gameScreen = gameScreen;
        this.ingredients = this.createIngredients();
    }

    selectRandomRecipe() {
        const randomRecipes = recipes[this.level];
        if (!randomRecipes || randomRecipes.length === 0) {
            throw new Error(`No recipes available for level: ${this.level}`);
        }
        const randomIndex = Math.floor(Math.random() * randomRecipes.length);
        return randomRecipes[randomIndex];
    }

    createIngredients() {
        const listOfIngredients = [];
        for (let ingredientName in this.recipe.ingredients) {
            const { points, quantity, speed, imageIngr } = this.recipe.ingredients[ingredientName];
            listOfIngredients.push(new Ingredients(this.gameScreen, ingredientName, points, quantity, speed, imageIngr));
        }
        return listOfIngredients;
    }
}

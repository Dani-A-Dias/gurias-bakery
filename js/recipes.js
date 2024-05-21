const recipes = {
    easy: [
        { name: "Banana Biscuits", ingredients: { "banana": 3, "flour": 2, "egg": 1, "butter": 1, "honey": 1 } },
        { name: "Pancakes", ingredients: { "egg": 2, "flour": 3, "honey": 1, "butter": 1 } },
        { name: "Muffins", ingredients: { "egg": 2, "flour": 3, "banana": 2, "honey": 1 } }
    ],
    medium: [
        { name: "Chicken Dumplings", ingredients: { "flour": 3, "butter": 2, "chicken": 1, "egg": 1 } },
        { name: "Spring Rolls", ingredients: { "flour": 2, "butter": 1, "carrot": 2, "egg": 1 } },
        { name: "Fried Rice", ingredients: { "rice": 3, "egg": 2, "carrot": 2, "chicken": 1 } }
    ],
    hard: [
        { name: "Sushi", ingredients: { "rice": 3, "salmon": 2, "seaweed": 1, "cucumber": 1 } },
        { name: "Sashimi", ingredients: { "salmon": 3, "tuna": 2 } },
        { name: "Nigiri", ingredients: { "rice": 3, "salmon": 2, "tuna": 2, "seaweed": 1, "cucumber": 1 } }
    ]
};

class Ingredients {
    constructor(name, points, quantityNeeded) {
        this.name = name;
        this.points = points;
        this.quantityNeeded = quantityNeeded;
        this.collected = 0;
    }

    collect() {
        this.collected++;
    }

    quantityComplete() {
        return this.collected >= this.quantityNeeded;
    }
}

class Recipe {
    constructor(level) {
        this.level = level;
        this.recipe = this.selectRandomRecipe();
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
        const ingredientNames = Object.keys(this.recipe.ingredients);
        const ingredientQt = Object.values(this.recipe.ingredients);

        for (let i = 0; i < ingredientNames.length; i++) {
            const ingredName = ingredientNames[i];
            const ingreNeeded = ingredientQt[i];
            listOfIngredients.push(new Ingredients(ingredName, 10, ingreNeeded));
        }
        return listOfIngredients;
    }
}
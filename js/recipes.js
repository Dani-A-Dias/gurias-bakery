const recipes = {
    easy: [
        { name: "Banana Biscuits", ingredients: ["banana", "flour", "egg", "butter", "honey"] },
        { name: "Pancakes", ingredients: ["egg", "flour", "honey", "butter"] },
        { name: "Muffins", ingredients: ["egg", "flour", "banana", "honey"] }
    ],
    medium: [
        { name: "Chicken Dumplings", ingredients: ["flour", "butter", "chicken", "egg"] },
        { name: "Spring Rolls", ingredients: ["flour", "butter", "carrot", "egg"] },
        { name: "Fried Rice", ingredients: ["rice", "egg", "carrot", "chicken"] }
    ],
    hard: [
        { name: "Sushi", ingredients: ["rice", "salmon", "seaweed", "cucumber"] },
        { name: "Sashimi", ingredients: ["salmon", "tuna"] },
        { name: "Nigiri", ingredients: ["rice", "salmon", "tuna", "seaweed", "cucumber"] }
    ]
};

class Recipe {
    constructor(level) {
        this.level = level;
        this.recipe = null; 
        this.selectRandomRecipe(); 
    }
    
    selectRandomRecipe() {
        const randomRecipes = recipes[this.level];
        if (!randomRecipes || randomRecipes.length === 0) {
            throw new Error(`No recipes available for level: ${this.level}`);
        }
        const randomIndex = Math.floor(Math.random() * randomRecipes.length);
        this.recipe = randomRecipes[randomIndex];
    }
}
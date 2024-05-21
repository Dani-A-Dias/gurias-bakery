const recipes = {
    easy: [
        { name: "Banana Biscuits", ingredients: { "Banana": 4, "Flour": 8, "Egg": 5, "Butter": 4, "Honey": 4 } },
        { name: "Pancakes", ingredients: { "Egg": 7, "Flour": 5, "Honey": 3, "Butter": 4 } },
        { name: "Muffins", ingredients: { "Egg": 8, "Flour": 7, "Banana": 9, "Honey": 4 } }
    ],
    medium: [
        { name: "Chicken Dumplings", ingredients: { "Flour": 9, "Butter": 7, "Chicken": 10, "Egg": 10 } },
        { name: "Spring Rolls", ingredients: { "Flour": 6, "Butter": 5, "Carrot": 10, "Egg": 9 } },
        { name: "Fried Rice", ingredients: { "Rice": 7, "Egg": 7, "Carrot": 7, "Chicken": 9 } }
    ],
    hard: [
        { name: "Sushi", ingredients: { "Rice": 9, "Salmon": 8, "Seaweed": 3, "Cucumber": 7 } },
        { name: "Sashimi", ingredients: { "Salmon": 10, "Tuna": 10 } },
        { name: "Nigiri", ingredients: { "Rice": 8, "Salmon": 7, "Tuna": 7, "Seaweed": 7, "Cucumber": 8 } }
    ]
};

class Ingredients{
    constructor(name, points, quantityNeeded){
        this.name = name;
        this.points = points;
        this.quantityNeeded = quantityNeeded;
        this.collected = 0;        
    }

    colect(){
        this.collected++
    }

    quantityComplete(){
        return this.collected >= this.quantityNeeded;
    }
}

class Recipe{
    constructor(level){
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
        const listOfIngredients = [ ];
        const ingredientName = Object.keys(this.recipe.ingredients);
        const ingredientQt = Object.values(this.recipe.ingredients);

        for (let i = 0; i < ingredientName.length; i++){
            const ingredName = ingredientName[i];
            const ingreNeeded = ingredientQt[i];
            listOfIngredients.push(new Ingredients(ingredName, 10, ingreNeeded))
        }
        return listOfIngredients;
    }

    displayRecipe(){
        const recipeName = document.getElementById("recipe");
        const ingredientList = document.getElementById("ingredients");

        recipeName.innerText = this.recipe.name;
        //ingredientList.innerHTML = " "; //Clear existing list!!! DO NOT DELETE

        this.ingredients.forEach((ingredient)=>{
            const liLine = document.createElement("li");
            liLine.innerText = `${ingredient.name}: ${ingredient.collected}/${ingredient.quantityNeeded}`;
            ingredientList.appendChild(liLine);
        })
    }

    updateDisplayRecipe(){
        const ingredientList = document.getElementById("ingredients");
        //ingredientList.innerHTML = " ";

        this.ingredients.forEach((ingredient)=>{
            const liLine = document.createElement("li");
            liLine.innerText = `${ingredient.name}: ${ingredient.collected}/${ingredient.quantityNeeded}`;
            ingredientList.appendChild(liLine);
        })

    }

    
}



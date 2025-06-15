const recipes = [
    {
        name: "Vegetarian Pasta",
        category: "vegetarian",
        image: "vegetarian-pasta.jpg",
        description: "A delicious vegetarian pasta made with fresh veggies.",
        link: "vegetarian-pasta.html"
    },
    {
        name: "Chocolate Cake",
        category: "dessert",
        image: "Cake.jpg",
        description: "A rich and moist chocolate cake for dessert lovers.",
        link: "chocolate-cake.html"
    },
    {
        name: "Grilled Cheese Sandwich",
        category: "vegetarian",
        image: "Cheese-SAndwich.jpg",
        description: "Classic grilled cheese with a crispy golden crust.",
        link: "grilled-cheese.html"
    },
    {
        name: "Veggie Burger",
        category: "vegetarian",
        image: "Burger.jpg",
        description: "A hearty veggie burger made from fresh veggies and grains.",
        link: "veggie-burger.html"
    }
];

function filterRecipes() {
    const category = document.getElementById("category").value;
    const filteredRecipes = category === "all" ? recipes : recipes.filter(recipe => recipe.category === category);

    displayRecipes(filteredRecipes);
}

function displayRecipes(filteredRecipes) {
    const recipesContainer = document.getElementById("recipes");
    recipesContainer.innerHTML = "";  // Clear existing recipes

    filteredRecipes.forEach(recipe => {
        const recipeCard = document.createElement("div");
        recipeCard.classList.add("recipe-card");

        recipeCard.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.name}">
            <h3><a href="${recipe.name.toLowerCase().replace(/ /g, '-')}.html">${recipe.name}</a></h3>
            <p>${recipe.description}</p>
        `;
        
        recipesContainer.appendChild(recipeCard);
    });
}



// Initial display of all recipes
window.onload = () => {
    displayRecipes(recipes);
};

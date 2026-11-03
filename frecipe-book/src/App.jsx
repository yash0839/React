import React, { useState } from "react";
import RecipeList from "./components/REcipeList";
import AddRecipe from "./components/AddREcipe";

function App() {
  const [recipes, setRecipes] = useState([]);

  
  const addRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  
  const deleteRecipe = (id) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  };

  return (
    <div>
      <div className="bg-success text-white text-center p-3">
        <h1>🍽️ My Recipe Book</h1>
        <p>Manage your favourite recipes</p>
      </div>

      <AddRecipe addRecipe={addRecipe} />

      <RecipeList
        recipes={recipes}
        deleteRecipe={deleteRecipe}
      />
    </div>
  );
}

export default App;

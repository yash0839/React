
import React from "react";
import RecipeCard from "./REcipeCard";

function RecipeList({ recipes, deleteRecipe }) {
  return (
    <div className="container mt-4">
      <h3>All Recipes</h3>

      {recipes.length === 0 ? (
        <p>No recipes available. Add your first recipe!</p>
      ) : (
        recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            deleteRecipe={deleteRecipe}
          />
        ))
      )}
    </div>
  );
}

export default RecipeList;

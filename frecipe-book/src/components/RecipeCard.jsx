
import React from "react";

function RecipeCard({ recipe, deleteRecipe }) {
  return (
    <div className="card shadow-sm mb-3">
      <div className="card-body">

        <h4>{recipe.name}</h4>

        <h6>Ingredients:</h6>
        <p>{recipe.ingredients}</p>

        <h6>Instructions:</h6>
        <p>{recipe.instructions}</p>

        <button
          className="btn btn-danger"
          onClick={() => deleteRecipe(recipe.id)}
        >
          Delete Recipe
        </button>

      </div>
    </div>
  );
}

export default RecipeCard;

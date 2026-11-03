
import React, { useState } from "react";

function AddRecipe({ addRecipe }) {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !ingredients.trim() || !instructions.trim()) {
      alert("Please fill all fields");
      return;
    }

    addRecipe({
      id: Date.now(),
      name,
      ingredients,
      instructions
    });

    setName("");
    setIngredients("");
    setInstructions("");

    alert("Recipe added successfully!");
  };

  return (
    <div className="container mt-4">
      <h3>Add New Recipe</h3>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Recipe Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <textarea
          className="form-control mb-3"
          placeholder="Ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />

        <textarea
          className="form-control mb-3"
          placeholder="Instructions"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
        />

        <button type="submit" className="btn btn-success">
          Add Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipe;

// src/components/RecipeList.jsx
import React from 'react';
import useRecipeStore from './recipeStore';

const RecipeList = () => {
  const { recipes, addFavorite, deleteRecipe } = useRecipeStore();

  return (
    <div>
      <h2>All Recipes</h2>
      {recipes.length === 0 ? (
        <p>No recipes available.</p>
      ) : (
        <ul>
          {recipes.map((recipe) => (
            <li key={recipe.id}>
              <h3>{recipe.name}</h3>
              <p>{recipe.description}</p>
              <button onClick={() => addFavorite(recipe.id)}>Favorite</button>
              <button onClick={() => deleteRecipe(recipe.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecipeList;

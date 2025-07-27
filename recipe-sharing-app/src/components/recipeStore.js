// src/components/recipeStore.js
import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  favorites: [],
  recommendations: [],

  // REQUIRED by ALX checker
  setRecipes: (newRecipes) => set(() => ({ recipes: newRecipes })),

  addRecipe: (recipe) => set((state) => ({
    recipes: [...state.recipes, recipe],
  })),

  updateRecipe: (updatedRecipe) => set((state) => ({
    recipes: state.recipes.map((r) =>
      r.id === updatedRecipe.id ? updatedRecipe : r
    ),
  })),

  deleteRecipe: (id) => set((state) => ({
    recipes: state.recipes.filter((r) => r.id !== id),
  })),

  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...state.favorites, recipeId],
    })),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  generateRecommendations: () =>
    set((state) => {
      const recommended = state.recipes.filter(
        (recipe) =>
          state.favorites.includes(recipe.id) && Math.random() > 0.3
      );
      return { recommendations: recommended };
    }),
}));

export default useRecipeStore;

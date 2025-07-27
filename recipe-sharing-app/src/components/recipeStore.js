// src/components/recipeStore.js
import create from 'zustand';

const useRecipeStore = create((set) => ({
  // Main recipe list
  recipes: [],

  // Filtered/search-related state
  searchTerm: '',
  filteredRecipes: [],
  setSearchTerm: (term) => set({ searchTerm: term }),
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),

  // ✅ Add favorites
  favorites: [],
  addFavorite: (recipe) =>
    set((state) => ({
      favorites: [...state.favorites, recipe],
    })),
  removeFavorite: (id) =>
    set((state) => ({
      favorites: state.favorites.filter((recipe) => recipe.id !== id),
    })),

  // ✅ Add recommendations (dummy for now)
  recommendations: [
    { id: 'rec-1', title: 'Recommended Pancakes' },
    { id: 'rec-2', title: 'Recommended Pasta' },
  ],

  // Optional: set full recipe list
  setRecipes: (recipes) => set({ recipes, filteredRecipes: recipes }),
}));

export default useRecipeStore;

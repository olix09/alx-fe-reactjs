// src/components/recipeStore.js
import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  filteredRecipes: [],
  searchTerm: '',

  // ✅ Setters
  setRecipes: (newRecipes) => set({ recipes: newRecipes, filteredRecipes: newRecipes }),
  setSearchTerm: (term) => set({ searchTerm: term }),

  // ✅ Update filteredRecipes based on searchTerm
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),

  // Optional: update recipe
  updateRecipe: (id, updatedData) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r.id === id ? { ...r, ...updatedData } : r
      ),
      filteredRecipes: state.filteredRecipes.map((r) =>
        r.id === id ? { ...r, ...updatedData } : r
      ),
    })),
}));

export default useRecipeStore;

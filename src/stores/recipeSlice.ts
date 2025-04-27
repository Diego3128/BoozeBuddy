import { StateCreator } from "zustand";
import { fetchCategories, fetchRecipes } from "../services";
import { Category, Drink, SearchFilter } from "../types";

export type RecipeSliceType = {
  categories: Category[];
  drinks: Drink[];
  getCategories: () => Promise<void>;
  getRecipes: (searchFilter: SearchFilter) => Promise<void>;
};

export const recipeSlice: StateCreator<RecipeSliceType> = (set) => ({
  categories: [],
  drinks: [],
  getCategories: async () => {
    const fetchedCategories = await fetchCategories();
    if (fetchedCategories) {
      set(() => ({ categories: fetchedCategories }));
    }
  },
  getRecipes: async (searchFilter) => {
    const fetchedDrinks = await fetchRecipes(searchFilter);
    if (fetchedDrinks) {
      set(() => ({ drinks: fetchedDrinks }));
    }
  },
});

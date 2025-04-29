import { StateCreator } from "zustand";
import { fetchCategories, fetchDrink, fetchRecipes } from "../services";
import { Category, Drink, FormattedDrinkDetail, SearchFilter } from "../types";

export type RecipeSliceType = {
  categories: Category[];
  drinks: Drink[];
  selectedRecipe: FormattedDrinkDetail | null;
  isModalOpen: boolean;
  getCategories: () => Promise<void>;
  getRecipes: (searchFilter: SearchFilter) => Promise<void>;
  selectRecipe: (drinkId: Drink["idDrink"]) => Promise<void>;
  closeModal: () => void;
};

export const recipeSlice: StateCreator<RecipeSliceType> = (set) => ({
  categories: [],
  drinks: [],
  selectedRecipe: null,
  isModalOpen: false,

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
  selectRecipe: async (drinkId) => {
    const drinkDetail = await fetchDrink(drinkId);
    if (drinkDetail) {
      // set piece of store 'selectedRecipe' and show modal
      set(() => ({ selectedRecipe: drinkDetail, isModalOpen: true }));
    }
  },
  closeModal: () =>
    set(() => ({
      isModalOpen: false,
      selectedRecipe: null
    })),
});

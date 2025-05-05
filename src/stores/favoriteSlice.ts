import { StateCreator } from "zustand";
import { FormattedDrinkDetail } from "../types";
import { RecipeSliceType } from "./recipeSlice";
import { NotificationSliceType } from "./notificationSlice";

export type FavoriteSliceType = {
  favorites: FormattedDrinkDetail[];
  favoriteExists: (recipeId: FormattedDrinkDetail["idDrink"]) => boolean;
  handleClickDrink: (recipe: FormattedDrinkDetail) => void;
  loadLocalFavorites: () => void;
};

export const favoriteSlice: StateCreator<
  FavoriteSliceType & RecipeSliceType & NotificationSliceType,
  [],
  [],
  FavoriteSliceType
> = (set, get) => ({
  favorites: [],
  handleClickDrink: (recipe) => {
    if (get().favoriteExists(recipe.idDrink)) {
      //  delete from favorites
      set((state) => ({
        ...state,
        favorites: state.favorites.filter(
          (favorite) => favorite.idDrink !== recipe.idDrink
        ),
      }));
      // notification from notificationSlice
      get().showNotification({
        contents: "Drink deleted from favorites.",
        error: false,
      });
    } else {
      // add to favorites
      set((state) => ({
        ...state,
        favorites: [...state.favorites, recipe],
      }));
      // notification from notificationSlice
      get().showNotification({
        contents: "Drink added to favorites.",
        error: false,
      });
    }
    get().closeModal();
    // sync favorites
    localStorage.setItem("favorite-recipes", JSON.stringify(get().favorites));
  },
  favoriteExists: (recipeId) => {
    return get().favorites.some((favorite) => favorite.idDrink === recipeId);
  },
  loadLocalFavorites: () => {
    const localFavorites = localStorage.getItem("favorite-recipes");
    if (localFavorites) {
      const favorites = <FormattedDrinkDetail[]>JSON.parse(localFavorites);
      set({ favorites });
    }
  },
});

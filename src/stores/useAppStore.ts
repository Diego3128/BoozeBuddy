import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { recipeSlice, RecipeSliceType } from "./recipeSlice";
import { favoriteSlice, FavoriteSliceType } from "./favoriteSlice";

type StoreState = RecipeSliceType & FavoriteSliceType;

export const useAppStore = create<StoreState>()(
  devtools((...a) => ({
    ...recipeSlice(...a),
    ...favoriteSlice(...a)
  }), {name: "boozebuddy"})
);

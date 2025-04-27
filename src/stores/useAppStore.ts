import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { recipeSlice, RecipeSliceType } from "./recipeSlice";

type StoreState = RecipeSliceType;

export const useAppStore = create<StoreState>()(
  devtools((...a) => ({
    ...recipeSlice(...a),
  }), {name: "boozebuddy"})
);

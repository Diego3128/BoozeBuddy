import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { recipeSlice, RecipeSliceType } from "./recipeSlice";
import { favoriteSlice, FavoriteSliceType } from "./favoriteSlice";
import { notificationSlice, NotificationSliceType } from "./notificationSlice";

type StoreState = RecipeSliceType & FavoriteSliceType & NotificationSliceType;

export const useAppStore = create<StoreState>()(
  devtools(
    (...a) => ({
      ...recipeSlice(...a),
      ...favoriteSlice(...a),
      ...notificationSlice(...a),
    }),
    { name: "boozebuddy" }
  )
);

import { z } from "zod";

export const CategorySchemaResponse = z.object({ strCategory: z.string() });

export const CategoriesSchemaResponse = z.object({
  drinks: z.array(CategorySchemaResponse),
});

export const SearchFilterSchema = z.object({
  ingredients: z.string(),
  category: z.string(),
});

export const DrinkApiResponseSchema = z.object({
  idDrink: z.string(),
  strDrink: z.string(),
  strDrinkThumb: z.string(),
});

export const DrinksApiResponseSchema = z.object({
  drinks: z.array(DrinkApiResponseSchema),
});

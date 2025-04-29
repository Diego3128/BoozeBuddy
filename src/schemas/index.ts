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

export const DrinkDetail = z.object({
  idDrink: z.string(),
  strDrink: z.string(),
  strCategory: z.string(),
  strGlass: z.string(),
  strInstructions: z.string(),
  strDrinkThumb: z.string(),
  strIngredient1: z.string().nullable(),
  strIngredient2: z.string().nullable(),
  strIngredient3: z.string().nullable(),
  strIngredient4: z.string().nullable(),
  strIngredient5: z.string().nullable(),
  strIngredient6: z.string().nullable(),
  strIngredient7: z.string().nullable(),
  strIngredient8: z.string().nullable(),
  strIngredient9: z.string().nullable(),
  strIngredient10: z.string().nullable(),
  strIngredient11: z.string().nullable(),
  strIngredient12: z.string().nullable(),
  strIngredient13: z.string().nullable(),
  strIngredient14: z.string().nullable(),
  strIngredient15: z.string().nullable(),
  strMeasure1: z.string().nullable(),
  strMeasure2: z.string().nullable(),
  strMeasure3: z.string().nullable(),
  strMeasure4: z.string().nullable(),
  strMeasure5: z.string().nullable(),
  strMeasure6: z.string().nullable(),
  strMeasure7: z.string().nullable(),
  strMeasure8: z.string().nullable(),
  strMeasure9: z.string().nullable(),
  strMeasure10: z.string().nullable(),
  strMeasure11: z.string().nullable(),
  strMeasure12: z.string().nullable(),
  strMeasure13: z.string().nullable(),
  strMeasure14: z.string().nullable(),
  strMeasure15: z.string().nullable(),
});

export const DrinkDetailsApiResponse = z.object({
  drinks: z.array(DrinkDetail),
});

// drink shape after being formatted:
export const IngredientDetails = z.array(
  z.object({ ingredient: z.string(), measure: z.string() })
);

export const FormattedDrinkDetail = z.object({
  idDrink: z.string(),
  strDrink: z.string(),
  strCategory: z.string(),
  strGlass: z.string(),
  strInstructions: z.string(),
  strDrinkThumb: z.string(),
  ingredientDetails: IngredientDetails,
});

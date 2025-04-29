import { z } from "zod";
import { FormattedDrinkDetail, IngredientDetails } from '../schemas/index';
import {
  CategorySchemaResponse,
  DrinkApiResponseSchema,
  DrinkDetail,
  SearchFilterSchema,
} from "../schemas/index";

export type Category = z.infer<typeof CategorySchemaResponse>;

export type SearchFilter = z.infer<typeof SearchFilterSchema>;

export type Drink = z.infer<typeof DrinkApiResponseSchema>;

export type DrinkDetail = z.infer<typeof DrinkDetail>;

export type FormattedIngredients = z.infer<typeof IngredientDetails>;

export type FormattedDrinkDetail = z.infer<typeof FormattedDrinkDetail>;

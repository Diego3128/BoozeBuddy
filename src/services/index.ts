import axios from "axios";
import {
  CategoriesSchemaResponse,
  DrinkDetailsApiResponse,
  DrinksApiResponseSchema,
} from "../schemas";
import {
  Category,
  Drink,
  FormattedDrinkDetail,
  SearchFilter,
} from "../types/index";
import { formatDrinkResponse } from "./helpers";

export const fetchCategories = async (): Promise<Category[] | undefined> => {
  const URL = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;
  const { data } = await axios.get(URL);
  //zod schema validation
  const result = CategoriesSchemaResponse.safeParse(data);
  if (result.success) {
    return result.data.drinks;
  }
};

export const fetchRecipes = async (
  searchFilter: SearchFilter
): Promise<Drink[] | undefined> => {
  const URL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchFilter.ingredients}&c=${searchFilter.category}`;
  const { data } = await axios.get(URL);
  //zod schema validation
  const result = DrinksApiResponseSchema.safeParse(data);
  if (result.success) {
    return result.data.drinks;
  }
};

export const fetchDrink = async (
  drinkId: Drink["idDrink"]
): Promise<FormattedDrinkDetail | undefined> => {
  const URL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`;
  const { data } = await axios.get(URL);
  // zod schema validation
  const result = DrinkDetailsApiResponse.safeParse(data);
  if (result.success) {
    // format response
    const drinkDetails = formatDrinkResponse(result.data.drinks[0]);
    return drinkDetails;
  }
};

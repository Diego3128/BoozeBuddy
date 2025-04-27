import axios from "axios";
import { CategoriesSchemaResponse, DrinksApiResponseSchema } from "../schemas";
import { Category, Drink, SearchFilter } from "../types/index";

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
  console.log(URL);
  const { data } = await axios.get(URL);
  //zod schema validation
  const result = DrinksApiResponseSchema.safeParse(data);
  if (result.success) {
    return result.data.drinks;
  }
};

import {
  DrinkDetail,
  FormattedDrinkDetail,
  FormattedIngredients,
} from "../types";

export const formatIngredients = (
  drinkDetail: DrinkDetail
): FormattedIngredients => {
  // Ingredients formatting
  // every drink ALWAYS has 15 'strIngredient' and 'strMeasure' properties. They can be null sometimes.
  // they will be merged into an array: [{ingredient: '...', measure: '...'}, {...}, {...}]  ignoring null values
  const drinkIngredients: FormattedIngredients = [];

  for (let i = 1; i <= 15; i++) {
    const ingredientKey = `strIngredient${i}` as keyof typeof drinkDetail;
    const measureKey = `strMeasure${i}` as keyof typeof drinkDetail;
    
    const ingredient = drinkDetail[ingredientKey] || null;
    const measure = drinkDetail[measureKey] || null;
    if (ingredient) {
      drinkIngredients.push({ ingredient: ingredient, measure: measure || "" });
    }
  }
  return drinkIngredients;
};

export const formatDrinkResponse = (
  drinkDetail: DrinkDetail
): FormattedDrinkDetail => {
  const formattedDrink = {
    idDrink: drinkDetail.idDrink,
    strDrink: drinkDetail.strDrink,
    strCategory: drinkDetail.strCategory,
    strGlass: drinkDetail.strGlass,
    strInstructions: drinkDetail.strInstructions,
    strDrinkThumb: drinkDetail.strDrinkThumb,
    ingredientDetails: formatIngredients(drinkDetail),
  };
  return formattedDrink;
};

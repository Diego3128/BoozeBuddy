import { Link } from "react-router-dom";
import { DrinkCard } from "../components/DrinkCard";
import { EmptyResource } from "../components/EmptyResource";
import { useAppStore } from "../stores/useAppStore";

export const FavoritePage = () => {
  const favoriteRecipes = useAppStore((state) => state.favorites);

  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-10 text-orange-500">
        Your Favorites
      </h2>

      {favoriteRecipes.length > 0 ? (
        <div className="grid gap-6 justify-center grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {favoriteRecipes.map((favoriteR) => (
            <DrinkCard drink={favoriteR} key={favoriteR.idDrink} />
          ))}
        </div>
      ) : (
        <EmptyResource>
          <p className="text-center text-gray-500">Your collection is empty!</p>
          <Link className="text-orange-500 underline" to="/">Discover</Link>
          <img draggable={false} className="pulse-scale w-40" src="assets/images/beer.svg" alt="beer icon" />
        </EmptyResource>
      )}
    </div>
  );
};

import { useAppStore } from "../stores/useAppStore";
import { Drink } from "../types";

type DrinkCardProps = {
  drink: Drink;
};

export const DrinkCard = ({ drink }: DrinkCardProps) => {
  const selectRecipe = useAppStore((state) => state.selectRecipe);

  return (
    <div className="bg-[#1a1a2e] rounded-2xl shadow-md hover:shadow-orange-500/30 transition-shadow duration-300 overflow-hidden  border border-orange-200 flex flex-col items-center p-4 relative">
      {/* Image container */}
      <div className="group w-24 h-24 min-[350px]:w-28 min-[350px]:h-28 min-[450px]:w-36 min-[450px]:h-36 sm:w-44 sm:h-44  rounded-md overflow-hidden border-2 border-gray-200 mb-4 transition-all duration-400 ease-in-out hover:scale-105 hover:shadow-md hover:shadow-gray-300 relative">
        <button
          onClick={() => selectRecipe(drink.idDrink)}
          className="cursor-pointer absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 text-white font-semibold text-sm md:text-lg "
        >
          See recipe
        </button>
        <img
          src={drink.strDrinkThumb}
          alt={`${drink.strDrink} thumb`}
          className="w-full h-full object-cover transition-all duration-300 ease-in-out"
        />
      </div>

      {/* Title */}
      <h3 className="text-md font-semibold text-gray-300 text-center z-10">
        {drink.strDrink}
      </h3>
    </div>
  );
};

import { useEffect, useRef } from "react";
import { DrinkCard } from "../components/DrinkCard";
import { EmptyResource } from "../components/EmptyResource";
import { useAppStore } from "../stores/useAppStore";

const IndexPage = () => {
  const drinks = useAppStore((state) => state.drinks);

  const drinksRef = useRef<HTMLDivElement>(null);

  // scroll when fetching drinks:
  useEffect(() => {
    if (drinks.length > 0 && drinksRef.current) {
      drinksRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [drinks]);

  return (
    <div ref={drinksRef} className="py-10 px-4 min-h-dvh">
      <h2 className="text-3xl font-bold text-center mb-10 text-orange-500">
        Drinks
      </h2>

      {drinks.length === 0 ? (
        <EmptyResource>
          <p className="text-center text-gray-500 text-lg font-semibold">
            Start by looking for some drinks!
          </p>
          <img
            draggable={false}
            className="pulse-scale w-40"
            src="assets/images/beer.svg"
            alt="beer icon"
          />
        </EmptyResource>
      ) : (
        <div className="grid gap-6 justify-center grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {drinks.map((drink) => (
            <DrinkCard drink={drink} key={drink.idDrink} />
          ))}
        </div>
      )}
    </div>
  );
};

export default IndexPage;
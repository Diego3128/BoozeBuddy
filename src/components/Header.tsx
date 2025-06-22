import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useAppStore } from "../stores/useAppStore";
import { SearchFilter } from "../types";

export const Header = () => {
  const getCategories = useAppStore((state) => state.getCategories);
  const getRecipes = useAppStore((state) => state.getRecipes);
  const categories = useAppStore((state) => state.categories);
  const showNotification = useAppStore((state) => state.showNotification);

  const { pathname } = useLocation();

  const isHome = useMemo(() => pathname === "/", [pathname]);

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  // search filter (an ingredient and category)
  const defaultFilter = { ingredients: "", category: "" };
  const [searchFilter, setSearchFilter] = useState<SearchFilter>(defaultFilter);

  const handleChange = (
    e: ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    const allowedFields = ["ingredients", "category"];

    if (!allowedFields.includes(name)) return;

    setSearchFilter((prevSearchFilter) => ({
      ...prevSearchFilter,
      [name]: value,
    }));
  };

  // validate form submission
  const validSearch = useMemo(() => {
    return (
      !Object.values(searchFilter).includes("") &&
      categories.some((c) => c.strCategory === searchFilter.category)
    );
  }, [searchFilter]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validSearch) {
      showNotification({ contents: "All fields are required.", error: true });
      return;
    }
    // submit form
    getRecipes(searchFilter);
    setSearchFilter(defaultFilter);
  };

  return (
    <header
      className={`bg-slate-900 shadow-lg shadow-slate-800 bg-cover bg-no-repeat bg-center ${
        isHome
          ? "min-h-dvh bg-[url('/assets/images/background.jpg')]"
          : "bg-[url('/assets/images/background-2.jpg')] bg-top"
      }`}
    >
      <div className={"mx-auto container py-4 px-3.5"}>
        <div className="flex justify-between items-center">
          <img
            className="w-14 md:w-16 rounded-lg"
            src="assets/images/logo.png"
            alt="boozebuddy logo"
          />

          <nav className="space-x-3 md:space-x-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? `text-orange-300 font-bold border-b-4 border-b-ortext-orange-300 px-1.5`
                  : `text-white`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/favorites"
              className={({ isActive }) =>
                isActive
                  ? `text-orange-300 font-bold border-b-4 border-b-ortext-orange-300 px-1.5`
                  : `text-white`
              }
            >
              {" "}
              Favorites
            </NavLink>
          </nav>
        </div>

        {isHome && (
          <form
            onSubmit={handleSubmit}
            className=" py-8 px-3.5 md:px-5 space-y-2.5 my-12  max-w-2xl bg-gray-800 text-gray-100 p-8 rounded-2xl shadow shadow-gray-800 w-full"
          >
            <div className="flex flex-col gap-2.5">
              <label htmlFor="ingredients" className="text-sm font-bold mb-2">
                Drink name or ingredient
              </label>
              <input
                onChange={handleChange}
                value={searchFilter.ingredients}
                type="text"
                id="ingredients"
                name="ingredients"
                placeholder="E.g: Vodka, Coffee, Rum, etc.."
                className="outline-none border-2  hover:border-gray-500 focus:border-gray-500 bg-gray-900 text-gray-100 placeholder-gray-400 px-4 py-2 rounded-md  border-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500 mb-4"
              />
            </div>

            <div className="flex flex-col gap-3.5">
              <label htmlFor="category" className="text-sm font-bold mb-2">
                Category
              </label>

              <select
                value={searchFilter.category}
                onChange={handleChange}
                name="category"
                id="category"
                className=" outline-none border-2  hover:border-gray-500 focus:border-gray-500  bg-gray-900 text-gray-100 px-4 py-2 rounded-md  border-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500 mb-4"
              >
                <option value="">Select a category</option>
                {categories.map((c) => (
                  <option key={c.strCategory} value={c.strCategory}>
                    {c.strCategory}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="bg-amber-500 hover:opacity-85 text-gray-900 font-semibold px-6 py-2 rounded-md transition-colors duration-300 shadow"
            >
              Serch Recipes
            </button>
          </form>
        )}
      </div>
    </header>
  );
};

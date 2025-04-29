import { Dialog, DialogPanel } from "@headlessui/react";
import { useAppStore } from "../stores/useAppStore";

export const Modal = () => {
  const isModalOpen = useAppStore((state) => state.isModalOpen);
  const closeModal = useAppStore((state) => state.closeModal);
  const selectedRecipe = useAppStore((state) => state.selectedRecipe);

  if (selectedRecipe) {
    return (
      <>
        <Dialog
          open={isModalOpen}
          onClose={closeModal}
          className="relative z-50"
        >
          {/* Overlay */}
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

          {/* Wrapper for centering */}
          <div className="fixed inset-0 flex items-center justify-center p-4 overflow-y-auto">
            {/* Dialog panel */}
            <DialogPanel className="w-full max-w-xl rounded-md bg-white py-10 px-3 md:p-6 shadow-lg">
              {/* content */}
              <div className="max-h-[70dvh] overflow-y-auto space-y-4 relative">
                <p className="font-bold text-sm md:text-lg absolute rounded-lg top-0 left-0 bg-amber-400 text-white p-2">
                  {selectedRecipe.strCategory}
                </p>
                <h2 className="text-xl font-bold mt-14">
                  {selectedRecipe.strDrink}
                </h2>

                <img
                  className="w-full rounded-md shadow-2xl object-contain shadow-slate-300 mb-10"
                  src={selectedRecipe.strDrinkThumb}
                  alt={`${selectedRecipe.strDrink} image`}
                />
                <div>
                  <p className="font-semibold mt-4 mb-2">Ingredients:</p>
                  <ul>
                    {selectedRecipe.ingredientDetails.map((ingredientD) => (
                      <li key={ingredientD.ingredient}>
                        <div className="text-sm md:text-lg border-b-2 border-b-slate-300 mb-1.5 font-bold">
                          <p>{ingredientD.ingredient}</p>
                          <p className="text-slate-700">
                            {ingredientD.measure}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="font-semibold mt-4">Instructions:</p>
                <p className="mt-3 mb-8">{selectedRecipe.strInstructions}</p>
              </div>

              {/* Buttons */}
              <div className="flex justify-end flex-wrap gap-4 mt-6 px-3 border-t-2 border-t-slate-300 pt-5">
                <button
                  onClick={closeModal}
                  className="bg-slate-500 px-4 py-2 rounded hover:opacity-90 cursor-pointer text-white font-bold"
                >
                  Close
                </button>
                <button
                  onClick={closeModal}
                  className="bg-amber-400 px-4 py-2 rounded hover:opacity-90 cursor-pointer text-gray-700 font-bold"
                >
                  Add to favorites
                </button>
              </div>
            </DialogPanel>
          </div>
        </Dialog>
      </>
    );
  } else {
    ("");
  }
};

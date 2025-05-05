import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./layouts/Layout.tsx";

const FavoritePage = lazy(() => import("./views/FavoritePage.tsx"));
const IndexPage = lazy(() => import("./views/IndexPage.tsx"));

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            element={
              <Suspense fallback="Loading home..">
                <IndexPage />
              </Suspense>
            }
            index
          />
          <Route
            path="/favorites"
            element={
              <Suspense fallback="Loading favorites..">
                <FavoritePage />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

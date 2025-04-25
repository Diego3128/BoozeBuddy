import { BrowserRouter, Routes, Route } from "react-router-dom";
import { IndexPage } from "./views/IndexPage.tsx";
import { FavoritePage } from "./views/FavoritePage.tsx";
import { Layout } from "./layouts/Layout.tsx";
export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route element={<IndexPage />} index />
          <Route path="/favorites" element={<FavoritePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

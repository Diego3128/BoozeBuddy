import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Modal } from "../components/Modal";
import { useAppStore } from "../stores/useAppStore";
import { useEffect } from "react";
import { Notification } from "../components/Notification";

export const Layout = () => {
  const loadLocalFavorites = useAppStore((state) => state.loadLocalFavorites);
  useEffect(() => {
    loadLocalFavorites();
  });

  return (
    <div>
      <Header />
      <main className="mx-auto container py-10 px-5">
        <Outlet />
      </main>
      <Modal />
      
      <Notification/>
    </div>
  );
};

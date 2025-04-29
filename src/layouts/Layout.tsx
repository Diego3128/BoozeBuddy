import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Modal } from "../components/Modal";

export const Layout = () => {
  return (
    <div>
      <Header />
      <main className="mx-auto container py-10 px-5">
        <Outlet />
      </main>
      <Modal/>
    </div>
  );
};

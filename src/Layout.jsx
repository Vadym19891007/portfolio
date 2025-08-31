import { Outlet } from "react-router-dom";
import React, { useContext } from "react";
import { ThemeContext } from "./App";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
const Layout = () => {
  const { setIsOpen, theme } = useContext(ThemeContext);
  return (
    <div
      className={`font-poppins ${theme} min-h-screen flex flex-col relative`}
    >
      <div className="fixed top-0 w-full mb-10">
        <Header />
      </div>

      <main className="flex-1 mt-10" onClick={() => setIsOpen(false)}>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;

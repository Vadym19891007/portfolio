import { Outlet } from "react-router-dom";
import React, { useState, useContext } from "react";
import { ThemeContext } from "./App";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
const Layout = () => {
  const { setIsOpen } = useContext(ThemeContext);
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1" onClick={() => setIsOpen(false)}>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;

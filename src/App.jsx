import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createContext, useState } from "react";
import Home from "./components/home/Home";
import Layout from "./Layout";
import Projects from "./components/projects/Projects";
import Contacts from "./components/contact/Contacts";

export const ThemeContext = createContext();
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/projects", element: <Projects /> },
      { path: "/contacts", element: <Contacts /> },
    ],
  },
]);

function App() {
  const dark = " bg-gray-900 text-white ";
  const white = "bg-white text-black black ";
  const [isDark, setIsDark] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ThemeContext.Provider
      value={{ isOpen, setIsOpen, isDark, setIsDark, white, dark }}
    >
      <RouterProvider router={router} />
    </ThemeContext.Provider>
  );
}

export default App;

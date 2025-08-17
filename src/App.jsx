import { createHashRouter, RouterProvider } from "react-router-dom";
import { createContext, useState } from "react";
import Home from "./components/home/Home";
import Layout from "./Layout";
import Projects from "./components/projects/Projects";
import Contacts from "./components/contact/Contacts";

export const ThemeContext = createContext();
const router = createHashRouter([
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
  const dark = " bg-gray-900  text-white white";
  const white = "bg-white text-black black ";
  const [isDark, setIsDark] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const theme = isDark ? dark : white;
  return (
    <ThemeContext.Provider
      value={{ isOpen, setIsOpen, isDark, setIsDark, white, dark, theme }}
    >
      <RouterProvider router={router} />
    </ThemeContext.Provider>
  );
}

export default App;

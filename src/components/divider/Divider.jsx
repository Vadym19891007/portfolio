import { useContext } from "react";
import { ThemeContext } from "../../App";

function Divider({ styles }) {
  const { isDark } = useContext(ThemeContext);

  return (
    <div
      className={`  w-[150px] sm:w-[300px] xl:w-[600px] m-auto h-[2px]  ${styles}  ${
        isDark ? "bg-white" : "bg-gray-500 "
      }`}
    ></div>
  );
}

export default Divider;

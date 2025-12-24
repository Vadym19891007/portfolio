import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2 cursor-pointer hover:-translate-y-1 transition-transform duration-300`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

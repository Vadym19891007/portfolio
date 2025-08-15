function Button({ children, styles }) {
  return (
    <button
      className={`my-10 sm:mt-5 bg-blue-400 w-50 rounded-2xl h-10 hover:bg-blue-500 hover:-translate-y-[3px] active:bg-blue-600 transition-all duration-300 cursor-pointer ${styles}`}
    >
      {children}
    </button>
  );
}

export default Button;

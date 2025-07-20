function Title({ text, styles }) {
  return (
    <h2 className={`${styles} text-2xl lg:text-4xl text-center font-medium`}>
      {text}
    </h2>
  );
}

export default Title;

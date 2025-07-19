import Title from "../title/Title";

function AboutMe() {
  return (
    <div className="font-poppins">
      <Title
        text="About me"
        styles="text-center text-2xl text-25 font-medium my-8"
      />
      <p>
        👋 Hi! My name is Vadym, and I’m a Frontend Developer with a strong
        technical background and passion for building modern web interfaces.
      </p>
    </div>
  );
}

export default AboutMe;

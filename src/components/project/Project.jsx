import Button from "../button/Button";
import Title from "../title/Title";

function Project({ project }) {
  const { id, title, img, description, link, divider } = project;
  return (
    <li
      key={id}
      className="w-1/2 mt-4 lg:m-auto lg:mt-3 lg:flex lg:flex-col lg:justify-start lg:h-[900px]"
    >
      <Title text={title} styles="text-center text-2xl text-shadow-2xs" />

      <img
        className="mt-5 shadow-xl shadow-gray-500 w-fit h-fit"
        src={img}
        alt={title}
      />
      <p className="mt-10 md:h-[350px]">{description}</p>
      <a className="block m-auto " target="_blanc" href={link}>
        <Button styles="block m-auto ">GitHub</Button>
      </a>
      <div className="lg:hidden py-4 ">{divider}</div>
    </li>
  );
}

export default Project;

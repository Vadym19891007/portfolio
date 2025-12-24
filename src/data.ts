const description = {
  todo: "This is a simple and intuitive To-do List application built with React with TypeScript, Tailwind and Next.js. It allows users to efficiently manage their daily tasks with the following features: Add and delete tasks, Sort tasks by priority and due date, Keep track of deadlines and important tasks, Clean and user-friendly interface, The app is designed to help users stay organized and focused. It's a great tool for personal productivity and task management!",
  converter:
    "A simple and responsive currency converter built with React. It fetches real-time exchange rates from the Frankfurter API, supports dynamic currency selection, input validation, loading/error states, and displays converted amounts with precision. Built with clean code structure and async/await logic using try/catch/finally for robust API handling.",
};

export const links = [
  { name: "Home", link: "/" },
  { name: "Projects", link: "/projects" },
  { name: "Contacts", link: "/contacts" },
];

export const skills = [
  { name: "JavaScript", img: "/js.webp" },
  { name: "TypeScript", img: "/ts.jpeg" },
  { name: "React", img: "/react.jpg" },
  { name: "Tailwind", img: "/tailwind.webp" },
  { name: "Git", img: "/git.png" },
  { name: "CSS", img: "/css.png" },
  { name: "HTML", img: "/html.jpg" },
  { name: "Next", img: "/Next.jpg" },
];

export const social = [
  {
    name: "Telegram",
    img: "/telegram.png",
    link: "https://t.me/Vadym_Dubovenko",
  },
  {
    name: "GitHub",
    img: "/github.png",
    link: "https://github.com/Vadym19891007",
  },
  {
    name: "Facebook",
    img: "/facebook.png",
    link: "https://www.facebook.com/vadim.dubovenko?locale=ru_RU",
  },
  {
    name: "Whatsapp",
    img: "/whatsapp.png",
    link: "https://wa.me/4915172698611",
  },
  {
    name: "Instagram",
    img: "/instagram.png",
    link: "https://www.instagram.com/vadimdubovenko/",
  },
  {
    name: "LinkedIn",
    img: "/linked.svg",
    link: "https://www.linkedin.com/in/vadym-dubovenko-ab4542302/?trk=opento_sprofile_details",
  },
];

export const projects = [
  {
    id: "1",
    img: "/TaskList.png",
    title: "To-do List ",
    description: description.todo,
    git: "https://github.com/Vadym19891007/TaskList-with-TS.git",
    link: "https://task-list-with-ts.vercel.app",
  },
  {
    id: "2",
    img: "/converter.png",
    title: "Converter App",
    description: description.converter,
    git: "https://github.com/Vadym19891007/converter.git",
    link: "https://converter-seven-delta.vercel.app",
  },
];

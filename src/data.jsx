import { eCommerce, taskList, converter, userApp } from "./data/images";
import Divider from "./components/divider/Divider";

const eCommerceDescription =
  " This is a small online store application built with React and React Router. It provides a smooth and dynamic shopping experience with the following features.React Router enables client-side navigation without page reloads, making the app fast and user-friendly. Ideal as a foundation for more complex e-commerce platforms.";

const toDo =
  "This is a simple and intuitive To-do List application built with React with TypeScript, Tailwind and Next.js. It allows users to efficiently manage their daily tasks with the following features: Add and delete tasks, Sort tasks by priority and due date, Keep track of deadlines and important tasks, Clean and user-friendly interface, The app is designed to help users stay organized and focused. It's a great tool for personal productivity and task management! ";

const convert =
  "A simple and responsive currency converter built with React. It fetches real-time exchange rates from the Frankfurter API, supports dynamic currency selection, input validation, loading/error states, and displays converted amounts with precision. Built with clean code structure and async/await logic using try/catch/finally for robust API handling.";

const userAppDescr =
  "User Management App — A React application built with Redux Toolkit for state management. The app allows adding new users, selecting and viewing user details, clearing the selection, and loading a user list. It demonstrates form handling, global state management, and clean UI layout with responsive components.";
const projects = [
  {
    id: 1,
    img: eCommerce,
    title: "eCommerce",
    description: eCommerceDescription,
    link: "https://github.com/Vadym19891007/e_commerce.git",
    divider: <Divider />,
  },
  {
    id: 2,
    img: taskList,
    title: "To-do List with TS",
    description: toDo,
    link: "https://github.com/Vadym19891007/TaskList-with-TS.git",
    divider: <Divider />,
  },
  {
    id: 3,
    img: converter,
    title: "Currency Converter App",
    description: convert,
    link: "https://github.com/Vadym19891007/converter.git",
    divider: <Divider />,
  },
  {
    id: 4,
    img: userApp,
    title: "User Manager App",
    description: userAppDescr,
    link: "https://github.com/Vadym19891007/user_app.git",
    divider: null,
  },
];
export const lebenslauf = "/files/Lebenslauf.docx";
export default projects;

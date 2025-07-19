import { eCommerce, taskList } from "./images/images";

const eCommerceDescription =
  " This is a small online store application built with React and React Router. It provides a smooth and dynamic shopping experience with the following features.React Router enables client-side navigation without page reloads, making the app fast and user-friendly. Ideal as a foundation for more complex e-commerce platforms.";

const toDo =
  "This is a simple and intuitive To-do List application built with React. It allows users to efficiently manage their daily tasks with the following features: Add and delete tasks, Sort tasks by priority and due date, Keep track of deadlines and important tasks, Clean and user-friendly interface, The app is designed to help users stay organized and focused. It's a great tool for personal productivity and task management. ";

const projects = [
  {
    id: 1,
    img: eCommerce,
    title: "eCommerce",
    description: eCommerceDescription,
  },
  { id: 2, img: taskList, title: "To-do List App", description: toDo },
];

export default projects;

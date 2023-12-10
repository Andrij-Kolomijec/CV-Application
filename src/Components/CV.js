import { v4 as uuidv4 } from "uuid";

const CV = {
  header: {
    firstName: "John",
    lastName: "Dow",
    address: "Random Street 124",
    city: "City 35678",
    phone: "123 456 789",
    email: "john.dow@gmail.com",
    dateOfBirth: "31.2.1985",
  },
  experience: [
    {
      years: "2015 - 2023",
      company: "Ice Cream Fellas",
      position: "Admiral General",
      id: uuidv4(),
    },
    {
      years: "2008 - 2015",
      company: "Water Ointment Amigos",
      position: "Colonel Manager",
      id: uuidv4(),
    },
  ],

  education: [
    {
      years: "2003 - 2008",
      name: "Real College",
      focus: "Something Very Useful",
      id: uuidv4(),
    },
    {
      years: "1995 - 2003",
      name: "Secondary Grammar School",
      focus: "Something Generally Useful",
      id: uuidv4(),
    },
  ],

  languages: [
    { language: "English", level: "Native", id: uuidv4() },
    { language: "Spanish", level: "C1", id: uuidv4() },
    { language: "German", level: "B1", id: uuidv4() },
  ],

  skills: [
    "JavaScript",
    "HTML",
    "CSS",
    "Python",
    "Webpack",
    "React",
    "Node.js",
    "Angular",
  ],
};

export default CV;

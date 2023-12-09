const initialCV = {
  header: {
    id: "Header",
    firstName: "John",
    lastName: "Dow",
    street: "Random Street 124",
    city: "City 35678",
    phone: "123 456 789",
    email: "john.dow@gmail.com",
    dateOfBirth: "31.2.1985",
  },
  experience: {
    id: "Experience",
    employers: [
      {
        id: "Ice Cream Fellas",
        years: "2015 - 2023",
        position: "Admiral General",
      },
      {
        id: "Water Ointment Amigos",
        years: "2008 - 2015",
        position: "Colonel Manager",
      },
    ],
  },
  education: {
    id: "Education",
    schools: [
      {
        id: "Real College",
        years: "2003 - 2008",
        focus: "Something Very Useful",
      },
      {
        id: "Secondary Grammar School",
        years: "1995 - 2003",
        focus: "Something Generally Useful",
      },
    ],
  },
  languages: {
    id: "Languages",
    spoken: [
      { id: "English", level: "Native" },
      { id: "Spanish", level: "C1" },
      { id: "German", level: "B1" },
    ],
  },
  skills: {
    id: "Skills",
    stack: [
      "JavaScript",
      "HTML",
      "CSS",
      "Python",
      "Webpack",
      "React",
      "Node.js",
      "Angular",
    ],
  },
};

export default initialCV;

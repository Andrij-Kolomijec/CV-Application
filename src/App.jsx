import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Styles/App.css";
import initialCV from "./Components/CV";
import Header from "./Components/header.jsx";
import Experience from "./Components/experience.jsx";
import Education from "./Components/education.jsx";
import Languages from "./Components/languages.jsx";
import Skills from "./Components/skills.jsx";
import InputHeader from "./Components/inputHeader.jsx";
import InputExperience from "./Components/inputExperience.jsx";
import InputEducation from "./Components/inputEducation.jsx";
import InputLanguages from "./Components/inputLanguages.jsx";
import InputSkills from "./Components/inputSkills.jsx";
import DownloadCV from "./Components/downloadCV.jsx";
import Icon from "./Components/icon.jsx";

function App() {
  const [CV, setCV] = useState(initialCV);

  function handleHeaderChange(e) {
    const { name, value } = e.target;
    setCV((prevCV) => ({
      ...prevCV,
      header: {
        ...prevCV.header,
        [name]: value,
      },
    }));
  }

  function handleChange(e, key, section) {
    const { name, value } = e.target;
    setCV((prevCV) => ({
      ...prevCV,
      [section]: prevCV[section].map((item) => {
        return item.id === key ? { ...item, [name]: value } : item;
      }),
    }));
    console.log(CV);
  }

  function handleAdd(e, section) {
    e.preventDefault();
    setCV((prevCV) => ({
      ...prevCV,
      [section]: [
        ...prevCV[section],
        section === "experience"
          ? {
              years: "",
              company: "",
              position: "",
              id: uuidv4(),
            }
          : section === "education"
            ? {
                years: "",
                name: "",
                focus: "",
                id: uuidv4(),
              }
            : section === "languages"
              ? {
                  language: "",
                  level: "",
                  id: uuidv4(),
                }
              : {
                  skill: "",
                  description: "",
                  id: uuidv4(),
                },
      ],
    }));
  }

  function handleDelete(e, keyToDelete, section) {
    e.preventDefault();
    setCV((prevCV) => ({
      ...prevCV,
      [section]: prevCV[section].filter((item) => item.id !== keyToDelete),
    }));
  }

  return (
    <>
      <Icon />
      <DownloadCV props={CV} />
      <div className="inputs">
        <InputHeader CV={CV} onChange={handleHeaderChange} />
        <InputExperience
          CV={CV}
          onChange={handleChange}
          onAddClick={handleAdd}
          onDeleteClick={handleDelete}
        />
        <InputEducation
          CV={CV}
          onChange={handleChange}
          onAddClick={handleAdd}
          onDeleteClick={handleDelete}
        />
        <InputLanguages
          CV={CV}
          onChange={handleChange}
          onAddClick={handleAdd}
          onDeleteClick={handleDelete}
        />
        <InputSkills
          CV={CV}
          onChange={handleChange}
          onAddClick={handleAdd}
          onDeleteClick={handleDelete}
        />
      </div>
      <div className="cv">
        <Header props={CV} />
        <Experience props={CV} />
        <Education props={CV} />
        <Languages props={CV} />
        <Skills props={CV} />
      </div>
    </>
  );
}

export default App;

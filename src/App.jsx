import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Styles/App.css";
import initialCV from "./Components/CV";
import Header from "./Components/header.jsx";
import Experience from "./Components/experience.jsx";
import Education from "./Components/education.jsx";
import Languages from "./Components/languages.jsx";
// import Skills from "./Components/skills.jsx";
import InputHeader from "./Components/inputHeader.jsx";
import InputExperience from "./Components/inputExperience.jsx";
import InputEducation from "./Components/inputEducation.jsx";
import InputLanguages from "./Components/inputLanguages.jsx";

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

  function handleAdd(section) {
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
              : "shit",
      ],
    }));
  }

  function handleDelete(keyToDelete, section) {
    setCV((prevCV) => ({
      ...prevCV,
      [section]: prevCV[section].filter((item) => item.id !== keyToDelete),
    }));
  }

  return (
    <>
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
      </div>

      <div className="cv">
        <Header props={CV} />
        <Experience props={CV} />
        <Education props={CV} />
        <Languages props={CV} />
      </div>
    </>
  );
}

export default App;

// import { useState } from "react";
import "./Styles/App.css";
import initialCV from "./Components/initialCV.jsx";
import Header from "./Components/header.jsx";
import Experience from "./Components/experience.jsx";
import Education from "./Components/education.jsx";
import Languages from "./Components/languages.jsx";
import Skills from "./Components/skills.jsx";
import InputHeader from "./Components/inputHeader.jsx";

function App() {
  return (
    <>
      <InputHeader headerInputs={initialCV.header} />
      <Header header={initialCV.header} />
      <Experience experience={initialCV.experience} />
      <Education education={initialCV.education} />
      <Languages languages={initialCV.languages} />
      <Skills skills={initialCV.skills} />
    </>
  );
}

export default App;

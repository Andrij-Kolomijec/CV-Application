// import { useState } from "react";

export default function Skills({ skills }) {
  const listSkills = skills.stack.map((skill) => <li key={skill}>{skill}</li>);

  return (
    <div>
      <h2>{skills.id}</h2>
      <ul>{listSkills}</ul>
    </div>
  );
}

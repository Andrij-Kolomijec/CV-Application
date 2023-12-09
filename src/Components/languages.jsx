// import { useState } from "react";

export default function Languages({ languages }) {
  const listLanguages = languages.spoken.map((language) => (
    <li key={language.id}>
      <b>{language.id}</b> - {language.level}
    </li>
  ));

  return (
    <div>
      <h2>{languages.id}</h2>
      <ul>{listLanguages}</ul>
      <hr />
    </div>
  );
}

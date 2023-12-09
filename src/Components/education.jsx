// import { useState } from "react";

export default function Education({ education }) {
  const listSchools = education.schools.map((school) => (
    <li key={school.id}>
      <p>
        <b>{school.years}</b>
        <br />
        {school.id} - {school.focus}
      </p>
    </li>
  ));

  return (
    <div>
      <h2>{education.id}</h2>
      <ul>{listSchools}</ul>
      <hr />
    </div>
  );
}

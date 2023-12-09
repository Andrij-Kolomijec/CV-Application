// import { useState } from "react";

export default function Experience({ experience }) {
  const listEmployers = experience.employers.map((employer) => (
    <li key={employer.id}>
      <p>
        <b>{employer.years}</b>
        <br />
        {employer.id} - {employer.position}
      </p>
    </li>
  ));

  return (
    <div>
      <h2>{experience.id}</h2>
      <ul>{listEmployers}</ul>
      <hr />
    </div>
  );
}

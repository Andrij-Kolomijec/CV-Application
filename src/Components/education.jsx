export default function Education({ props }) {
  const listSchools = props.education.map((school) => (
    <li key={school.id}>
      <p>
        <b>{school.years}</b>
        <br />
        {school.name} - {school.focus}
      </p>
    </li>
  ));

  return (
    <div>
      <h2>Education</h2>
      <ul>{listSchools}</ul>
      <hr />
    </div>
  );
}

export default function Experience({ props }) {
  const listEmployers = props.experience.map((employer) => (
    <li key={employer.id}>
      <p>
        <b>{employer.years}</b>
        <br />
        {employer.company} - {employer.position}
      </p>
    </li>
  ));

  return (
    <div>
      <h2>Experience</h2>
      <ul>{listEmployers}</ul>
      <hr />
    </div>
  );
}

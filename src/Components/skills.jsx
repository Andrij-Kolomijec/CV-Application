export default function Skills({ props }) {
  const listSkills = props.skills.map((skill) => (
    <li key={skill.id}>
      <b>{skill.skill}</b> - {skill.description}
    </li>
  ));

  return (
    <div>
      <h2>Skills</h2>
      <ul>{listSkills}</ul>
    </div>
  );
}

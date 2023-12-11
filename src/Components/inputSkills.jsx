export default function InputSkills({
  CV,
  onChange,
  onDeleteClick,
  onAddClick,
}) {
  const listSkills = CV.skills.map((skill) => {
    const key = skill.id;
    return (
      <div key={key}>
        <input
          type="text"
          placeholder="Skill"
          name="skill"
          value={skill.skill}
          onChange={(e) => onChange(e, key, "skills")}
        />
        <input
          type="text"
          placeholder="Description"
          name="description"
          value={skill.description}
          onChange={(e) => onChange(e, key, "skills")}
        />
        <button
          className="deleteButton"
          onClick={(e) => onDeleteClick(e, key, "skills")}
        >
          Delete
        </button>
      </div>
    );
  });

  return (
    <>
      <form className="skills">
        <h3>Skills</h3>
        {listSkills}
        <button className="addButton" onClick={(e) => onAddClick(e, "skills")}>
          Add
        </button>
      </form>
    </>
  );
}

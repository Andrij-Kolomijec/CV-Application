export default function InputExperience({
  CV,
  onChange,
  onDeleteClick,
  onAddClick,
}) {
  const listEmployers = CV.experience.map((employer) => {
    const key = employer.id;
    return (
      <div key={key}>
        <input
          type="text"
          placeholder="Years worked"
          name="years"
          value={employer.years}
          onChange={(e) => onChange(e, key, "experience")}
        />
        <input
          type="text"
          placeholder="Employer"
          name="company"
          value={employer.company}
          onChange={(e) => onChange(e, key, "experience")}
        />
        <input
          type="text"
          placeholder="Position"
          name="position"
          value={employer.position}
          onChange={(e) => onChange(e, key, "experience")}
        />
        <button onClick={() => onDeleteClick(key, "experience")}>Delete</button>
      </div>
    );
  });

  return (
    <>
      <form className="experience">
        <h3>Experience</h3>
        {listEmployers}
      </form>
      <button onClick={() => onAddClick("experience")}>Add</button>
    </>
  );
}

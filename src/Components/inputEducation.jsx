export default function InputEducation({
  CV,
  onChange,
  onDeleteClick,
  onAddClick,
}) {
  const listSchools = CV.education.map((school) => {
    const key = school.id;
    return (
      <div key={key}>
        <input
          type="text"
          placeholder="Years studied"
          name="years"
          value={school.years}
          onChange={(e) => onChange(e, key, "education")}
        />
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={school.name}
          onChange={(e) => onChange(e, key, "education")}
        />
        <input
          type="text"
          placeholder="Focus"
          name="focus"
          value={school.focus}
          onChange={(e) => onChange(e, key, "education")}
        />
        <button
          className="deleteButton"
          onClick={(e) => onDeleteClick(e, key, "education")}
        >
          Delete
        </button>
      </div>
    );
  });

  return (
    <>
      <form className="education">
        <h3>Education</h3>
        {listSchools}
        <button
          className="addButton"
          onClick={(e) => onAddClick(e, "education")}
        >
          Add
        </button>
      </form>
    </>
  );
}

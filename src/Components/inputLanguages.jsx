export default function InputLanguages({
  CV,
  onChange,
  onDeleteClick,
  onAddClick,
}) {
  const listLanguages = CV.languages.map((language) => {
    const key = language.id;
    return (
      <div key={key}>
        <input
          type="text"
          placeholder="Language"
          name="language"
          value={language.language}
          onChange={(e) => onChange(e, key, "languages")}
        />
        <input
          type="text"
          placeholder="Level"
          name="level"
          value={language.level}
          onChange={(e) => onChange(e, key, "languages")}
        />
        <button
          className="deleteButton"
          onClick={(e) => onDeleteClick(e, key, "languages")}
        >
          Delete
        </button>
      </div>
    );
  });

  return (
    <>
      <form className="languages">
        <h3>Languages</h3>
        {listLanguages}
        <button
          className="addButton"
          onClick={(e) => onAddClick(e, "languages")}
        >
          Add
        </button>
      </form>
    </>
  );
}

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
        <button onClick={() => onDeleteClick(key, "languages")}>Delete</button>
      </div>
    );
  });

  return (
    <>
      <form className="languages">
        <h3>Languages</h3>
        {listLanguages}
      </form>
      <button onClick={() => onAddClick("languages")}>Add</button>
    </>
  );
}

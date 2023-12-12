import { useState } from "react";

function ItemEntry({ item, onChange, onDeleteClick }) {
  const [hover, setHover] = useState(false);
  const key = item.id;
  return (
    <div key={key}>
      <input
        type="text"
        placeholder="Language"
        name="language"
        value={item.language}
        onChange={(e) => onChange(e, key, "languages")}
      />
      <input
        type="text"
        placeholder="Level"
        name="level"
        value={item.level}
        onChange={(e) => onChange(e, key, "languages")}
      />
      <img
        onClick={(e) => onDeleteClick(e, key, "languages")}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        title="Delete item"
        className="icon-delete"
        src={hover ? "/delete-empty.svg" : "/delete.svg"}
        alt="Delete Icon"
      />
    </div>
  );
}

export default function InputLanguages({
  CV,
  onChange,
  onDeleteClick,
  onAddClick,
}) {
  const listLanguages = CV.languages.map((language) => {
    return (
      <ItemEntry
        key={language.id}
        item={language}
        onChange={onChange}
        onDeleteClick={onDeleteClick}
      />
    );
  });
  return (
    <>
      <form className="languages">
        <h3>Languages</h3>
        {listLanguages}
        <img
          onClick={(e) => onAddClick(e, "languages")}
          title="Add new"
          className="icon-add"
          src="/plus.svg"
          alt="Add Icon"
        />
      </form>
    </>
  );
}

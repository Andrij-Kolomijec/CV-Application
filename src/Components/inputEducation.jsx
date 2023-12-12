import { useState } from "react";

function ItemEntry({ item, onChange, onDeleteClick }) {
  const [hover, setHover] = useState(false);
  const key = item.id;
  return (
    <div key={key}>
      <input
        type="text"
        placeholder="Years studied"
        name="years"
        value={item.years}
        onChange={(e) => onChange(e, key, "education")}
      />
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={item.name}
        onChange={(e) => onChange(e, key, "education")}
      />
      <input
        type="text"
        placeholder="Focus"
        name="focus"
        value={item.focus}
        onChange={(e) => onChange(e, key, "education")}
      />
      <img
        onClick={(e) => onDeleteClick(e, key, "education")}
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

export default function InputEducation({
  CV,
  onChange,
  onDeleteClick,
  onAddClick,
}) {
  const listSchools = CV.education.map((school) => {
    return (
      <ItemEntry
        key={school.id}
        item={school}
        onChange={onChange}
        onDeleteClick={onDeleteClick}
      />
    );
  });
  return (
    <>
      <form className="education">
        <h3>Education</h3>
        {listSchools}
        <img
          onClick={(e) => onAddClick(e, "education")}
          title="Add new"
          className="icon-add"
          src="/plus.svg"
          alt="Add Icon"
        />
      </form>
    </>
  );
}

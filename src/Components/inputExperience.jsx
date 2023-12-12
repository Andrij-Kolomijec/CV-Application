import { useState } from "react";

function ItemEntry({ item, onChange, onDeleteClick }) {
  const [hover, setHover] = useState(false);
  const key = item.id;
  return (
    <div key={key}>
      <input
        type="text"
        placeholder="Years worked"
        name="years"
        value={item.years}
        onChange={(e) => onChange(e, key, "experience")}
      />
      <input
        type="text"
        placeholder="Employer"
        name="company"
        value={item.company}
        onChange={(e) => onChange(e, key, "experience")}
      />
      <input
        type="text"
        placeholder="Position"
        name="position"
        value={item.position}
        onChange={(e) => onChange(e, key, "experience")}
      />
      <img
        onClick={(e) => onDeleteClick(e, key, "experience")}
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

export default function InputExperience({
  CV,
  onChange,
  onDeleteClick,
  onAddClick,
}) {
  const listEmployers = CV.experience.map((employer) => {
    return (
      <ItemEntry
        key={employer.id}
        item={employer}
        onChange={onChange}
        onDeleteClick={onDeleteClick}
      />
    );
  });
  return (
    <>
      <form className="experience">
        <h3>Experience</h3>
        {listEmployers}
        <img
          onClick={(e) => onAddClick(e, "experience")}
          title="Add new"
          className="icon-add"
          src="/plus.svg"
          alt="Add Icon"
        />
      </form>
    </>
  );
}

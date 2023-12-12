import { useState } from "react";

function ItemEntry({ item, onChange, onDeleteClick }) {
  const [hover, setHover] = useState(false);
  const key = item.id;
  return (
    <div key={key}>
      <input
        type="text"
        placeholder="Skill"
        name="skill"
        value={item.skill}
        onChange={(e) => onChange(e, key, "skills")}
      />
      <input
        type="text"
        placeholder="Description"
        name="description"
        value={item.description}
        onChange={(e) => onChange(e, key, "skills")}
      />
      <img
        onClick={(e) => onDeleteClick(e, key, "skills")}
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

export default function InputSkills({
  CV,
  onChange,
  onDeleteClick,
  onAddClick,
}) {
  const listSkills = CV.skills.map((skill) => {
    return (
      <ItemEntry
        key={skill.id}
        item={skill}
        onChange={onChange}
        onDeleteClick={onDeleteClick}
      />
    );
  });
  return (
    <>
      <form className="skills">
        <h3>Skills</h3>
        {listSkills}
        <img
          onClick={(e) => onAddClick(e, "skills")}
          title="Add new"
          className="icon-add"
          src="/plus.svg"
          alt="Add Icon"
        />
      </form>
    </>
  );
}

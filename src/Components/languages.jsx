export default function Languages({ props }) {
  const listLanguages = props.languages.map((language) => (
    <li key={language.language}>
      <b>{language.language}</b> - {language.level}
    </li>
  ));

  return (
    <div>
      <h2>Languages</h2>
      <ul>{listLanguages}</ul>
      <hr />
    </div>
  );
}

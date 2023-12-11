export default function Header({ props }) {
  return (
    <div>
      <h1>
        {props.header.firstName} {props.header.lastName}
      </h1>
      <h3>{props.header.address}</h3>
      <h3>{props.header.city}</h3>
      <h3>{props.header.phone}</h3>
      <h3>{props.header.email}</h3>
      <h3>{props.header.dateOfBirth}</h3>
      <hr />
    </div>
  );
}

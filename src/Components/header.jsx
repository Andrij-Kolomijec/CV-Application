// import { useState } from "react";

export default function Header({ header }) {
  return (
    <div className="header">
      <h1>
        {header.firstName} {header.lastName}
      </h1>
      <h3>{header.street}</h3>
      <h3>{header.city}</h3>
      <h3>{header.phone}</h3>
      <h3>{header.email}</h3>
      <h3>{header.dateOfBirth}</h3>
      <hr />
    </div>
  );
}

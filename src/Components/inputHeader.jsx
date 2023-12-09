import { useState } from "react";

export default function InputHeader({ headerInputs }) {
  const [firstName, setFirstName] = useState(headerInputs.firstName);
  const [lastName, setLastName] = useState(headerInputs.lastName);
  const [street, setAddress] = useState(headerInputs.street);
  const [city, setCity] = useState(headerInputs.city);
  const [phone, setPhone] = useState(headerInputs.phone);
  const [email, setEmail] = useState(headerInputs.email);
  const [dateOfBirth, setDateOfBirth] = useState(headerInputs.dateOfBirth);

  return (
    <div>
      <input
        type="text"
        placeholder="First name"
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
      />
      <input
        type="text"
        placeholder="Last name"
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
      />
      <input
        type="text"
        placeholder="Address"
        value={street}
        onChange={(event) => setAddress(event.target.value)}
      />
      <input
        type="text"
        placeholder="City"
        value={city}
        onChange={(event) => setCity(event.target.value)}
      />
      <input
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
      />
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        type="text"
        placeholder="Date of birth"
        value={dateOfBirth}
        onChange={(event) => setDateOfBirth(event.target.value)}
      />
      <h1>
        {firstName} {lastName}
      </h1>
      <h3>{street}</h3>
      <h3>{city}</h3>
      <h3>{phone}</h3>
      <h3>{email}</h3>
      <h3>{dateOfBirth}</h3>
    </div>
  );
}

export default function InputHeader({ CV, onChange }) {
  return (
    <form className="header">
      <h3>General information</h3>
      <input
        type="text"
        placeholder="First name"
        name="firstName"
        id="firstName"
        value={CV.header.firstName}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Last name"
        name="lastName"
        id="lastName"
        value={CV.header.lastName}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Address"
        name="address"
        id="address"
        value={CV.header.address}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="City"
        name="city"
        id="city"
        value={CV.header.city}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Phone"
        name="phone"
        id="phone"
        value={CV.header.phone}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Email"
        name="email"
        id="email"
        value={CV.header.email}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Date of birth"
        name="dateOfBirth"
        id="dob"
        value={CV.header.dateOfBirth}
        onChange={onChange}
      />
    </form>
  );
}

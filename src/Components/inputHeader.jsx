export default function InputHeader({ CV, onChange }) {
  return (
    <form className="header">
      <h3>General information</h3>
      <input
        type="text"
        placeholder="First name"
        name="firstName"
        value={CV.header.firstName}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Last name"
        name="lastName"
        value={CV.header.lastName}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Address"
        name="address"
        value={CV.header.address}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="City"
        name="city"
        value={CV.header.city}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Phone"
        name="phone"
        value={CV.header.phone}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Email"
        name="email"
        value={CV.header.email}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Date of birth"
        name="dateOfBirth"
        value={CV.header.dateOfBirth}
        onChange={onChange}
      />
    </form>
  );
}

export default function InputHeader({ CV, onChange }) {
  return (
    <form className="header">
      <h3>General information</h3>
      {/* <label htmlFor="firstName">First name</label> */}
      <input
        type="text"
        placeholder="First name"
        name="firstName"
        id="firstName"
        value={CV.header.firstName}
        onChange={onChange}
      />
      {/* <label htmlFor="lastName">Last name</label> */}
      <input
        type="text"
        placeholder="Last name"
        name="lastName"
        id="lastName"
        value={CV.header.lastName}
        onChange={onChange}
      />
      {/* <label htmlFor="address">Address</label> */}
      <input
        type="text"
        placeholder="Address"
        name="address"
        id="address"
        value={CV.header.address}
        onChange={onChange}
      />
      {/* <label htmlFor="city">City</label> */}
      <input
        type="text"
        placeholder="City"
        name="city"
        id="city"
        value={CV.header.city}
        onChange={onChange}
      />
      {/* <label htmlFor="phone">Phone number</label> */}
      <input
        type="text"
        placeholder="Phone"
        name="phone"
        id="phone"
        value={CV.header.phone}
        onChange={onChange}
      />
      {/* <label htmlFor="email">E-mail</label> */}
      <input
        type="text"
        placeholder="Email"
        name="email"
        id="email"
        value={CV.header.email}
        onChange={onChange}
      />
      {/* <label htmlFor="dob">Date of birth</label> */}
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

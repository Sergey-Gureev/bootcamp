
export default function Register() {
  const [user, setUser] = useState({ fullname: "", email: "", password: "" });

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("user created", user);
  };
  return (
    <div className="container">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="fullname">Full Name</label>
          <input
            type="text"
            name="fullname"
            onChange={handleChange}
            autoComplete="off"
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            autoComplete="off"
          />
          <label htmlFor="password">Passoword</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            autoComplete="off"
          />
          <div className="submit-btn">
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}


import { useState } from "react";
import { useNavigate } from "react-router";
import { registerUser } from "../services/authService";

const RegisterView = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  })

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await registerUser(user);
    setUser({
      name: '',
      email: '',
      password: '',
    })
    navigate('/')
  }

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit} className="form mt-5">
        <h2>Register</h2>
        <input
          onChange={handleChange}
          value={user.name}
          name="name"
          className="form-control"
          type="text"
          placeholder="name"
        />
        <input
          onChange={handleChange}
          value={user.email}
          name="email"
          className="form-control"
          type="text"
          placeholder="email"
        />
        <input
          onChange={handleChange}
          name="password"
          value={user.password}
          className="form-control"
          type="password"
          placeholder="password"
        />
        <button className="btn btn-dark form-control">Register</button>
      </form>
    </div>
  );
};

export default RegisterView;

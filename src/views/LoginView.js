import { useState} from 'react';
import { useNavigate } from 'react-router';
import { loginUser } from '../services/authService';

export default function LoginView() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await loginUser(user);
    console.log(response.data);
    setUser({
      email: '',
      password: '',
    });
    navigate('/')
    window.location.reload();
  }

  return (
    <form onSubmit={handleSubmit} className="form mt-5">
      <h2>Login</h2>
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
      <button className="btn btn-dark form-control">Log In</button>
    </form>
  )
}

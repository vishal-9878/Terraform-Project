import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './signup.css'; // Make sure to use the updated CSS file

const Signin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(process.env.REACT_APP_API_URL_SIGNIN, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      if (response.ok) {
        console.log('Login successful!', data);
        navigate('/fireworks');
      } else {
        setError(data.error || 'Invalid username or password. Please try again.');
      }
    } catch (error) {
      console.error('Error during signin:', error);
      setError('An unexpected error occurred. Please try again later.');
    }
  };

  return (
    <div className="signup-box">
      <h2>Signin Form</h2>
      <div className="toggle-buttons">
        <Link to="/signin" className="toggle-button active">Login</Link>
        <Link to="/signup" className="toggle-button">Signup</Link>
      </div>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="signup-button">Signin</button>
      </form>
    </div>
  );
};

export default Signin;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './signup.css'; // Import the CSS file

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage(''); // Clear any previous error messages
    try {
      // Username contains at least one number
      if (!/\d/.test(username)) {
        setErrorMessage('Username must contain at least one number.');
        return;
      }

      // Email ends with @gmail.com
      if (!email.endsWith('@gmail.com')) {
        setErrorMessage('Email must end with @gmail.com.');
        return;
      }

      // Password complexity check
      const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-_+=])[A-Za-z\d!@#$%^&*()-_+=]{8,}$/;
      if (!passwordRegex.test(password)) {
        setErrorMessage('Password must be at least 8 characters long and contain at least one uppercase letter, one number, and one symbol.');
        return;
      }

      console.log(process.env.REACT_APP_API_URL_SIGNUP); // Log the API URL

      // Make API call to sign up the user
      const response = await fetch(process.env.REACT_APP_API_URL_SIGNUP, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        navigate('/verify'); // Redirect to verify page
      } else {
        setErrorMessage(data.error || 'Signup failed');
      }
    } catch (error) {
      console.error('Error during signup:', error);
      setErrorMessage('Error during signup');
    }
  };

  return (
    <div className="signup-box">
      <h2>Signup Form</h2>
      <div className="toggle-buttons">
        <Link to="/signin" className="toggle-button">Login</Link>
        <Link to="/signup" className="toggle-button active">Signup</Link>
      </div>
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
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button type="submit" className="signup-button">Signup</button>
      </form>
    </div>
  );
};

export default Signup;

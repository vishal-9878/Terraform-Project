import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './verify.css'; // Import the CSS file

const Verification = () => {
  const [username, setUsername] = useState('');
  const [verification_code, setVerificationCode] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const usernameFromParams = queryParams.get('username');
    if (usernameFromParams) {
      setUsername(usernameFromParams);
    }
  }, [location]);

  const handleVerificationSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(process.env.REACT_APP_API_URL_VERIFY, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, verification_code }),
      });

      const data = await response.json();
      if (response.ok) {
        // Redirect to signin page upon successful verification
        navigate('/signin');
      } else {
        setErrorMessage(data.error || 'Verification failed');
      }
    } catch (error) {
      console.error('Error during verification:', error);
      setErrorMessage('Error during verification');
    }
  };

  return (
    <div className="container">
      <div className="signup-button">
        <button onClick={() => navigate('/signup')}>Sign Up</button>
      </div>
      <div className="verify-box">
        <h2>Verification Form</h2>
        <form onSubmit={handleVerificationSubmit}>
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
              type="text"
              placeholder="Verification Code"
              value={verification_code}
              onChange={(e) => setVerificationCode(e.target.value)}
              required
            />
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button type="submit" className="verify-button">Verify</button>
        </form>
      </div>
    </div>
  );
};

export default Verification;

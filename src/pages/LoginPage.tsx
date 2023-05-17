import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();

    if (email.trim() === '' || password.trim() === '') {
      setError('Please fill in all fields');
      return;
    }

    if (!email.includes('@')) {
      setError('Invalid email address');
      return;
    }

    if (password === '1234') {
      setError('Password cannot be 1234');
      return;
    }
    navigate('/');
  };

  return (
    <div className='login-page'>
      <div className='card'>
        <h1>Login Page</h1>
        <form onSubmit={handleLogin}>
          <div className='form-group'>
            <label>Email:</label>
            <input
              type='text'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <label>Password:</label>
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <div className='error'>{error}</div>}
          <button type='submit'>Login</button>
        </form>
        {/* <p>
          Don't have an account? <Link to='/signup'>Sign up</Link>
        </p> */}
      </div>
    </div>
  );
};

export default LoginPage;

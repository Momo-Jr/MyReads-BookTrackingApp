import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavBar from '../../components/NavigationBar/NavBar';
import './LoginPage.css';

interface LoginPageProps {
  onLogin: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
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

    onLogin(); // Call onLogin prop to update login state
    navigate('/');
  };

  return (
    <div>
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
          <p>
            Don't have an account? <Link to='/signup'>Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

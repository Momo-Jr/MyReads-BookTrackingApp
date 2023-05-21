import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavBar from '../../components/NavigationBar/NavBar';
import './Signup.css';

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignUp = (event: any) => {
    event.preventDefault();

    if (
      email.trim() === '' ||
      password.trim() === '' ||
      confirmPassword.trim() === ''
    ) {
      setError('Please fill in all fields');
      return;
    }

    if (!email.includes('@')) {
      setError('Invalid email address');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    navigate('/login');
  };

  return (
    <>
      <NavBar />

      <div className='signup-page'>
        <div className='card'>
          <h1>Sign Up Page</h1>
          <form onSubmit={handleSignUp}>
            <div className='form-group'>
              <label htmlFor='email'>Email:</label>
              <input
                type='text'
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='password'>Password:</label>
              <input
                type='password'
                id='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='confirmPassword'>Confirm Password:</label>
              <input
                type='password'
                id='confirmPassword'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            {error && <div className='error'>{error}</div>}
            <button type='submit'>Sign Up</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;

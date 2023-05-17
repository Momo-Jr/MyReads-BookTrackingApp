import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
export default function NavBar() {
  return (
    <nav className='navbar'>
      <Link to='/' className='logo'>
        <h1>MyReads App</h1>
      </Link>
      <div className='loginButtonContainer'>
        <Link to='/login' className='loginButton'>
          Login
        </Link>
      </div>
    </nav>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

interface NavBarProps {
  isLoggedIn: boolean;
  onLogout: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ isLoggedIn, onLogout }) => {
  return (
    <nav className='navbar'>
      <Link to='/' className='logo'>
        <h1>MyReads App</h1>
      </Link>
      <div className='loginButtonContainer'>
        {isLoggedIn ? (
          <button className='logoutButton' onClick={onLogout}>
            Logout
          </button>
        ) : (
          <Link to='/login' className='loginButton'>
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;

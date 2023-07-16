import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from '../src/components/NavigationBar/NavBar';
import Home from '../src/pages/Home/Home';
import LoginPage from '../src/pages/Login/LoginPage';
import SearchPage from '../src/pages/SearchPage/SearchPage';
import SignUpPage from './pages/SignUp/Signup';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    console.log('new feature example');
  };

  return (
    <BrowserRouter>
      <NavBar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginPage onLogin={handleLogin} />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='/signup' element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

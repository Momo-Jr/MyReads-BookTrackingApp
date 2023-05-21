import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import LoginPage from './pages/Login/LoginPage';
import SearchPage from './pages/SearchPage/SearchPage';
import SignUpPage from './pages/SignUp/Signup';
function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='Search' element={<SearchPage />} />
          <Route path='Login' element={<LoginPage />} />
          <Route path='signup' element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

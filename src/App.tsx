import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavigationBar/NavBar';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SearchPage from './pages/SearchPage';
function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='Search' element={<SearchPage />} />
          <Route path='Login' element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

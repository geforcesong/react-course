import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/common/NavBar';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import LicensePage from './pages/LicensePage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/license' element={<LicensePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

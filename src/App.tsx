import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/common/NavBar';
import AboutPage from './pages/AboutPage';
import FormTestPage from './pages/FormTestPage';
import HomePage from './pages/HomePage';
import LicensePage from './pages/LicensePage';
import ParentChildTest from './pages/ParentChildTest';
import ZustandTestPage from './pages/ZustandTestPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/license' element={<LicensePage />} />
          <Route path='/zustand' element={<ZustandTestPage />} />
          <Route path='/tests/form' element={<FormTestPage />} />
          <Route path='/parent-child' element={<ParentChildTest />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

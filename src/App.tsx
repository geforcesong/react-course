import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/common/NavBar';
import AboutPage from './pages/AboutPage';
import FormTestPage from './pages/FormTestPage';
import HomePage from './pages/HomePage';
import LicensePage from './pages/LicensePage';
import ParentChildTest from './pages/ParentChildTest';
import TempTest from './pages/UseEventPage';
import ZustandTestPage from './pages/ZustandTestPage';
import RtkQueryTestPage from './pages/RtkQueryTestPage';
import ReactQueryCourse from './pages/ReactQueryCourse';

function App() {
  /* eslint no-console: "off" */
  console.log('Env User Name:', import.meta.env);

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
          <Route path='/tests/temp-test' element={<TempTest />} />
          <Route path='/tests/rtk-query-test' element={<RtkQueryTestPage />} />
          <Route
            path='/tests/react-query-course'
            element={<ReactQueryCourse />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

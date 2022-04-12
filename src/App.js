import {
  Routes,
  Route,
} from 'react-router-dom';

import SplashPage from "./components/SplashPage";
import AboutPage from './components/AboutPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<SplashPage />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App;

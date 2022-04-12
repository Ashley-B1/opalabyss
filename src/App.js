import {
  Routes,
  Route,
} from 'react-router-dom';

import SplashPage from "./components/SplashPage";
import AboutPage from './components/AboutPage';
import QuestionsPage from './components/QuestionsPage';
import ContactPage from './components/ContactPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<SplashPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/faq' element={<QuestionsPage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;

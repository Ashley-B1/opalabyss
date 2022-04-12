import {
  Routes,
  Route,
} from 'react-router-dom';

import SplashPage from "./components/SplashPage";
import AboutPage from './components/AboutPage';
import QuestionsPage from './components/QuestionsPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<SplashPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/faq' element={<QuestionsPage />} />
      </Routes>
    </>
  );
}

export default App;

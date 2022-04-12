import {
  Routes,
  Route,
} from 'react-router-dom';

import SplashPage from "./components/SplashPage";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<SplashPage />} />
      </Routes>
    </>
  );
}

export default App;

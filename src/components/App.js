import { Route, Routes } from 'react-router'; 
import 'bootstrap/dist/css/bootstrap.min.css';

import PredictPage from './PredictPage/PredictPage';
import HomePage from './HomePage/HomePage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/predict-page' element={<PredictPage />}/>
      </Routes>
    </>
  );
}

export default App;

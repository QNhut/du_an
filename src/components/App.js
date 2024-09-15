import { Route, Routes } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';

import PredictPage from './PredictPage/PredictPage';
import Login from './Login/Login';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />}/>
      <Route path='/predict-page' element={<PredictPage />} />
    </Routes >
    </>
  );
}

export default App;

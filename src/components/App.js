import { Route, Routes } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';

import { publicRoutes } from '../routes';

function App() {
  return (
    <>
      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.component
          return <Route key={index} path={route.path} element={<Page />}/>
        })}
      </Routes >
    </>
  );
}

export default App;

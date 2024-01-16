import { Route, Routes } from 'react-router-dom';
import { Layout } from '../../layout/Layout/Layout';

import './App.scss';

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}></Route>
      </Routes>
    </>
  );
};

export default App;

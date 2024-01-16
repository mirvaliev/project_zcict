import { Route, Routes } from 'react-router-dom';
import { Layout } from '../../layout/Layout/Layout';
import { RootLoginComponent } from '../RootLoginComponent';
import HomePage from '../../pages/HomePage/HomePage';

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<HomePage />} />
        </Route>
        <Route path='login' element={<RootLoginComponent />} />
      </Routes>
    </>
  );
};

export default App;

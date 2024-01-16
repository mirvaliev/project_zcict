import { useLocation } from 'react-router-dom';
import { LoginPage } from '../pages/LoginPage/LoginPage';

export const RootLoginComponent: React.FC = () => {
  const location = useLocation();

  return location.pathname === '/login' ? <LoginPage /> : null;
};

import {
  BrowserRouter as Router,
  Route,
  Routes,
  // Navigate,
} from 'react-router-dom';
import { Header } from '../components/Header';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Cadastro } from '../pages/SignUp';

export const AppRoutes = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='*' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cadastro' element={<Cadastro />} />
      </Routes>
    </Router>
  );
};

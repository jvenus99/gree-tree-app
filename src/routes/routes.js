import {
  BrowserRouter as Router,
  Route,
  Routes,
  // Navigate,
} from 'react-router-dom';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/login' element={<Login />} />
      </Routes>
    </Router>
  );
};

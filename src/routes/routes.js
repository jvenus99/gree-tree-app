import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from 'react-router-dom';
import { Header } from '../components/Header';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { MeusEventos } from '../pages/MeusEventos';
import { PontosDoacao } from '../pages/PontosDoacao';
import { Profile } from '../pages/Profile';
import { Cadastro } from '../pages/SignUp';
import { Mudas } from '../pages/Mudas';
import { Eventos } from '../pages/Eventos';
import { Usuarios } from '../pages/Usuarios';
import { Sustentabilidade } from '../pages/Sustentabilidade';
import { AuthProvider } from '../context/authContext';
import useAuth from '../hooks/useAuth';

const Private = ({ Item }) => {
  const { authenticated } = useAuth();
  const navigate = useNavigate();

  return authenticated ? <Item /> : navigate('/login');
};

export const AppRoutes = () => {
  return (
    <Router>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path='*' element={<Private Item={Home} />} />
          <Route path='/login' element={<Login />} />
          <Route path='/cadastro' element={<Cadastro />} />
          <Route path='/profile' element={<Private Item={Profile} />} />
          <Route
            path='/pontosDoacao'
            element={<Private Item={PontosDoacao} />}
          />
          <Route path='/myEvents' element={<Private Item={MeusEventos} />} />
          <Route path='/mudas' element={<Private Item={Mudas} />} />
          <Route path='/eventos' element={<Private Item={Eventos} />} />
          <Route path='/usuarios' element={<Private Item={Usuarios} />} />
          <Route
            path='/sustentabilidade'
            element={<Private Item={Sustentabilidade} />}
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

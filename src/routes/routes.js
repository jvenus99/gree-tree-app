import {
  BrowserRouter as Router,
  Route,
  Routes,
  // Navigate,
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

export const AppRoutes = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='*' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cadastro' element={<Cadastro />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/pontosDoacao' element={<PontosDoacao />} />
        <Route path='/myEvents' element={<MeusEventos />} />
        <Route path='/mudas' element= {<Mudas/>} />
        <Route path='/eventos' element= {<Eventos/>} />
      </Routes>
    </Router>
  );
};

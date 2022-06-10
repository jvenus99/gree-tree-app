import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import jwt from 'jwt-decode';
import { api } from '../services';

import { login } from '../services/authController';

export default function useAuth() {
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      setAuthenticated(true);
    }

    setLoading(false);
  }, []);

  const handleLogin = async (dados) => {
    const {
      data: { accessToken },
    } = await login(dados);

    const { user } = await jwt(accessToken);

    localStorage.setItem('token', `Bearer ${accessToken}`);
    localStorage.setItem('user', JSON.stringify(user));
    api.defaults.headers.Authorization = localStorage.getItem('token');

    setAuthenticated(true);
    navigate('/');
  };

  const handleLogout = () => {
    setAuthenticated(false);

    localStorage.removeItem('token');
    api.defaults.headers.Authorization = undefined;

    navigate('/login');
  };

  return { authenticated, loading, handleLogin, handleLogout };
}

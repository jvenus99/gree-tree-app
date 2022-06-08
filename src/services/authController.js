import { api } from './index';

export function login({ email, password }) {
  return api.post('/login', {
    email,
    password,
  });
}

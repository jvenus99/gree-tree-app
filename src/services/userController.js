import { api } from './index';

export function createUser({ name, phone, email, password }) {
  return api.post('/users', {
    name,
    phone,
    email,
    password,
  });
}

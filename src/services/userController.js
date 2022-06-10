import { api } from './index';

export function createUser({ name, phone, email, password }) {
  return api.post('/users', {
    name,
    phone,
    email,
    password,
  });
}

export function getUsers() {
  return api.get('/users');
}

export function getUser(id) {
  return api.get(`/users/getUserDetails/${id}`);
}

export function getUserByName(name) {
  return api.get(`/users/getByname/${name}`);
}

export function tornarAdmin(id) {
  return api.put(`/users/userToAdmin/${id}`);
}

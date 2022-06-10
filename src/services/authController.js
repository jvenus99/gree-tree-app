import axios from 'axios';

export function login({ email, password }) {
  return axios.post('https://green-tree-app-api.herokuapp.com/auth/login', {
    email,
    password,
  });
}

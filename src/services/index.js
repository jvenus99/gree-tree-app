import axios from 'axios';

const headers = {
  'Content-Type': 'application/json',
  // Authorization: localStorage.getItem('token'),
};

export const api = axios.create({
  baseURL: 'https://green-tree-app-api.herokuapp.com',
  headers,
});

import axios from 'axios';

const headers = {
  Authorization: localStorage.getItem('token'),
  'Content-Type': 'application/json',
};

export const api = axios.create({
  baseURL: 'https://green-tree-app-api.herokuapp.com',
  headers,
});

import axios from 'axios';

const headers = {
  Authorization: localStorage.getItem('token'),
};

export const api = axios.create({
  baseURL: 'http://localhost:8000/',
  headers,
});

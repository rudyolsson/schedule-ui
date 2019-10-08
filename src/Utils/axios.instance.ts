import axios from 'axios';

export const instance = () => {
  return axios.create({
    baseURL: 'http://localhost:9002'
  });
};

export const authInstance = () => {
  const token = localStorage.getItem('token');
  return axios.create({
    baseURL: 'http://localhost:9002',
    headers: { Authorization: `Bearer ${token}` }
  });
};

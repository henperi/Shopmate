import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://backendapi.turing.com/',
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});

export const setAuthToken = (token) => {
  if (token) {
    localStorage.setItem('token', token);
    axiosInstance.defaults.headers.common['user-key'] = token;
  }
};

export default axiosInstance;

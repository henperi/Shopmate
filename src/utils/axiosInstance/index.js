import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://backendapi.turing.com/',
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});

export const setAuthHeader = (token, header = 'user-key') => {
  // console.log(token, header);
  if (token) {
    localStorage.setItem('user-key', token);
    axiosInstance.defaults.headers.common[header] = token;
  }
};

export default axiosInstance;

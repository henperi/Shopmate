import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://backendapi.turing.com/',
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});

// export const setToken = (token) => {
//   axiosInstance.defaults.headers.common['access-token'] = token;
// };

export default axiosInstance;

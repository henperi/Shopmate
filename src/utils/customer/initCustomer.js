import { setAuthToken } from '../axiosInstance';

const initAuthCustomer = () => {
  const token = localStorage.getItem('token');

  if (token) {
    setAuthToken(token);
  }
};

export default initAuthCustomer;

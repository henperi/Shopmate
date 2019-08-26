import { setAuthToken } from '../../reduxStore/modules/auth/actions';

const initAuthUser = (store) => {
  const token = localStorage.getItem('user-key');

  if (token) {
    store.dispatch(setAuthToken(token));
  }
};

export default initAuthUser;

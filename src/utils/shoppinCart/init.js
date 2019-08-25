import { getCart } from '../../reduxStore/modules/shoppinCart/actions';

const initShoppingCart = (store) => {
  const cartId = localStorage.getItem('cartId');
  if (cartId) {
    store.dispatch(getCart(cartId));
  }
};

export default initShoppingCart;

import { ADD_TO_CART } from '../constants/cart'

export const addToCart = id => ({
  type: ADD_TO_CART,
  payload: id
});

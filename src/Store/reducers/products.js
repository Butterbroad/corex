import {
  GET_PRODUCTS_SUCCES,
  GET_PRODUCTS_FAILURE
} from '../constants/products'

const initialState = {
  allProducts: [],
  error: ''
}

export default function products(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS_SUCCES:
      return { ...state, allProducts: action.payload };

    case GET_PRODUCTS_FAILURE:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};
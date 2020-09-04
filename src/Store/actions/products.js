import {
  GET_PRODUCTS_SUCCES,
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_ASYNC
} from '../constants/products'
import products from '../../database/products.json'
import { showLoader, hideLoader } from './loader'

export const getProductsSucces = products => ({
  type: GET_PRODUCTS_SUCCES,
  payload: products
});

export const getProductsFailure = error => ({
  type: GET_PRODUCTS_FAILURE,
  payload: error
});

export const getProductsAsync = () => {
  return async (dispatch) => {
    try {
      dispatch(showLoader())
      setTimeout(() => {
        dispatch(getProductsSucces(products))
        dispatch(hideLoader())
      }, 2000)
    }
    catch (error) {
      dispatch(getProductsFailure(error));
    }
  }
};
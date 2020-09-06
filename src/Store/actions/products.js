import {
  GET_PRODUCTS_SUCCES,
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_BY_INCREASE_MANUFACTURER,
  GET_PRODUCTS_BY_DECREASE_MANUFACTURER,
  GET_PRODUCTS_BY_MAX_PRICE,
  GET_PRODUCTS_BY_MIN_PRICE
} from '../constants/products'
import products from '../../database/products.json'
import { showLoader, hideLoader } from './loader'

export const getProductsByIncreaseManufacturer = () => ({
  type: GET_PRODUCTS_BY_INCREASE_MANUFACTURER
});

export const getProductsByDecreaseManufacturer = () => ({
  type: GET_PRODUCTS_BY_DECREASE_MANUFACTURER
});

export const getProductsByMaxPrice = () => ({
  type: GET_PRODUCTS_BY_MAX_PRICE
});

export const getProductsByMinPrice = () => ({
  type: GET_PRODUCTS_BY_MIN_PRICE
});


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
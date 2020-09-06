import {
  GET_PRODUCTS_SUCCES,
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_BY_INCREASE_MANUFACTURER,
  GET_PRODUCTS_BY_DECREASE_MANUFACTURER,
  GET_PRODUCTS_BY_MAX_PRICE,
  GET_PRODUCTS_BY_MIN_PRICE
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

    case GET_PRODUCTS_BY_INCREASE_MANUFACTURER: {
      const sortedProducts = Array.from(state.allProducts.sort((a, b) => {
        if (a.manufacturer < b.manufacturer) {
          return -1
        }
        return 0
      }))
      return {
        ...state, allProducts: sortedProducts
      };
    }

    case GET_PRODUCTS_BY_DECREASE_MANUFACTURER: {
      const sortedProducts = Array.from(state.allProducts.sort((a, b) => {
        if (a.manufacturer > b.manufacturer) {
          return -1
        }
      }))
      return {
        ...state, allProducts: sortedProducts
      };
    }

    case GET_PRODUCTS_BY_MAX_PRICE: {
      const sortedProducts = Array.from(state.allProducts.sort((a, b) => {
        return Math.round(+b.maxPrice) - Math.round(+a.maxPrice)
      }))
      return {
        ...state, allProducts: sortedProducts
      };
    }

    case GET_PRODUCTS_BY_MIN_PRICE: {
      const sortedProducts = Array.from(state.allProducts.sort((a, b) => {
        return Math.round(+a.minPrice) - Math.round(+b.minPrice)
      }))
      return {
        ...state, allProducts: sortedProducts
      };
    }

    default:
      return state;
  }
};



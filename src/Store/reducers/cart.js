import {
  ADD_TO_CART
} from '../constants/cart'

const initialState = {
  products: []
}

export default function cart(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      const newState = new Set(state.products)
      newState.add(action.payload)

      return { ...state, products: Array.from(newState) };
    }

    default:
      return state;
  }
};
import { combineReducers } from 'redux';
import products from './products'
import loader from './loader'
import cart from './cart'


const allReducers = combineReducers({
  products, loader, cart
});

export default allReducers;
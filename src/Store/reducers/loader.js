import {
  SHOW_LOADER,
  HIDE_LOADER,
} from '../constants/loader'

const initialState = {
  show: false
}

export default function loader(state = initialState, action) {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, show: true };

    case HIDE_LOADER:
      return { ...state, show: false };

    default:
      return state;
  }
};
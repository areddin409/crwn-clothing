import {
  ADD_ITEM,
  TOGGLE_CART_HIDDEN,
  REMOVE_ITEM_FROM_CART,
  REMOVE_ITEM
} from './cart.types';
import { addItemToCart, removeItemFromCart } from './cart.utils';

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case TOGGLE_CART_HIDDEN: {
      return {
        ...state,
        hidden: !state.hidden
      };
    }
    case ADD_ITEM: {
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, payload)
      };
    }
    case REMOVE_ITEM: {
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, payload)
      };
    }
    case REMOVE_ITEM_FROM_CART: {
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== payload.id)
      };
    }
    default:
      return state;
  }
};

export default cartReducer;

import { IItem } from '../../../common/types';
import { CartActionKind } from "../actions";


export interface CartAction {
  type: CartActionKind;
  payload?: any;
}

export interface initialCartStateType {
  selected: IItem[];
}

export const initialCartState = {
  selected: []
};

const cartReducer = (state: initialCartStateType, action: CartAction) => {
  const { type, payload } = action;
  switch (type) {
    case CartActionKind.ADD_TO_CART: {
      return {
        ...state,
        selected: [
          ...state.selected,
          payload
        ]
      }
    }
    case CartActionKind.REMOVE_FROM_CART: {
      return {
        ...state,
        selected: state.selected.filter(i => i.id !== payload)
      };
    }
    default:
      return state;
  }
}

export default cartReducer;
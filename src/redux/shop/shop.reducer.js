import { ShopActionTypes } from "./shop.type";
const INITIAL_STATE = {
  collections: {}
};

export default (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
    case ShopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: actions.payload
      };

    default:
      return state;
  }
};

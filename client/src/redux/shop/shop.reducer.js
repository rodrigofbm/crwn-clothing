import { ShopActionTypes } from "./shop.type";
const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: null
};

export default (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
    case ShopActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true
      };

    case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        collections: actions.payload,
        isFetching: false
      };

    case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        errorMessage: actions.payload,
        isFetching: false
      };

    default:
      return state;
  }
};

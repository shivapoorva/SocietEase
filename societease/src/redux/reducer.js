import { LOGGED_IN } from "./types";

const initialState = {
  loggedIn: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGGED_IN:
      return {
        ...state,
        loggedIn: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
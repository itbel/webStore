import { initialState } from "./initialState";
import { SET_LOGIN_STATE } from "./actionTypes";

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN_STATE:
      return {
        ...state,
        isLoggedIn: true,
      };
    default:
      return state;
  }
};

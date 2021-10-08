import { managersConstants } from "../constants/index.js";

/* let user = JSON.parse(localStorage.getItem("user")); */
/* const initialState = user ? { loggedIn: true, user } : {}; */

const initialState = {
  user: {},
  loading: false,
  error: null,
};
export function authentication(state = initialState, action) {
  switch (action.type) {
    case managersConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
      };
    case managersConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user,
      };
    case managersConstants.LOGIN_FAILURE:
      return {};
    case managersConstants.LOGOUT:
      return {};
    default:
      return state;
  }
}

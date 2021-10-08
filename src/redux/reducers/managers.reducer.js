import { managersConstants } from "../constants/index.js";

const initialState = {
  users: {},
  manager: {},
  loading: false,
  loggingIn: true,
  loggedIn: true,
  error: null,
};

export const authentication = (state = initialState, action) => {
  switch (action.type) {
    case managersConstants.LOGIN_REQUEST:
      return {
        ...state,
        loggingIn: true,
      };
    case managersConstants.LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        loggedIn: true,
        manager: action.managerLoginData,
      };
    case managersConstants.LOGIN_FAILURE:
      return { ...state, loggingIn: false, error: action.error };
    case managersConstants.LOGOUT:
      return { ...state, loggedIn: true, user: {}, managers: {} };
    default:
      return state;
  }
};

export const userGet = (state = initialState, action) => {
  switch (action.type) {
    case managersConstants.GETALL_REQUEST:
      return {
        loading: true,
      };
    case managersConstants.GETALL_SUCCESS:
      return {
        users: action.users,
      };
    case managersConstants.GETALL_FAILURE:
      return {
        error: action.error,
      };

    default:
      return state;
  }
};

/* export const userGet = (state = initialState, action) => {
  switch (action.type) {
    case managersConstants.GETALL_REQUEST:
      return {
        loading: true,
      };
    case managersConstants.GETALL_SUCCESS:
      return {
        users: action.users,
      };
    case managersConstants.GETALL_FAILURE:
      return {
        error: action.error,
      };

    default:
      return state;
  }
};

export const userGet = (state = initialState, action) => {
  switch (action.type) {
    case managersConstants.GETALL_REQUEST:
      return {
        loading: true,
      };
    case managersConstants.GETALL_SUCCESS:
      return {
        users: action.users,
      };
    case managersConstants.GETALL_FAILURE:
      return {
        error: action.error,
      };

    default:
      return state;
  }
};
export const userGet = (state = initialState, action) => {
  switch (action.type) {
    case managersConstants.GETALL_REQUEST:
      return {
        loading: true,
      };
    case managersConstants.GETALL_SUCCESS:
      return {
        users: action.users,
      };
    case managersConstants.GETALL_FAILURE:
      return {
        error: action.error,
      };

    default:
      return state;
  }
};
 */

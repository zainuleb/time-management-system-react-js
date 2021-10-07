import { userConstants } from "../constants/index.js";
import { userService } from "../services/user.services.js";
import { alertActions } from "./index.js";
import { history } from "../services/history.js";

const login = (username, password) => async (dispatch) => {
  dispatch(request());

  try {
    const user = await userService.login(username, password);
    dispatch(success(user));
    history.push("/");
  } catch (error) {
    dispatch(failure(error));
    dispatch(alertActions.error(error));
  }

  function request() {
    return { type: userConstants.LOGIN_REQUEST };
  }
  function success(user) {
    return { type: userConstants.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error };
  }
};

function logout() {
  /*   userService.logout(); */
  return { type: userConstants.LOGOUT };
}

function register(user) {
  return (dispatch) => {
    dispatch(request(user));

    userService.register(user).then(
      (user) => {
        dispatch(success());
        history.push("/login");
        dispatch(alertActions.success("Registration successful"));
      },
      (error) => {
        dispatch(failure(error));
        dispatch(alertActions.error(error));
      }
    );
  };

  function request(user) {
    return { type: userConstants.REGISTER_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.REGISTER_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.REGISTER_FAILURE, error };
  }
}

export const userActions = {
  login,
  logout,
  register,
};

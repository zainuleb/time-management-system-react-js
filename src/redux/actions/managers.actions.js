import { managersConstants } from "../constants/index.js";
import { managersService } from "../services/managers.services.js";
import { alertActions } from "./index.js";
import createHistory from "history/createBrowserHistory";

const login = (email, password) => async (dispatch) => {
  dispatch(request());
  const history = createHistory();

  try {
    const managerLoginData = await managersService.login(email, password);
    dispatch(success(managerLoginData));
    console.log("here");
    history.push("/dashboard");
    dispatch(alertActions.success("Login Successful"));
  } catch (error) {
    dispatch(failure(error));
    dispatch(alertActions.error(error));
  }

  function request() {
    return { type: managersConstants.LOGIN_REQUEST };
  }
  function success(managerLoginData) {
    return { type: managersConstants.LOGIN_SUCCESS, managerLoginData };
  }
  function failure(error) {
    return { type: managersConstants.LOGIN_FAILURE, error };
  }
};

const register = (manager) => async (dispatch) => {
  dispatch(request());

  try {
    const managerRegisterData = await managersService.register(manager);
    dispatch(success(managerRegisterData)); /* .then(history.push("/login")); */
    dispatch(alertActions.success("Registration successful"));
  } catch (error) {
    dispatch(failure(error));
    dispatch(alertActions.error(error));
  }

  function request() {
    return { type: managersConstants.REGISTER_REQUEST };
  }
  function success(managerRegisterData) {
    return { type: managersConstants.REGISTER_SUCCESS, managerRegisterData };
  }
  function failure(error) {
    return { type: managersConstants.REGISTER_FAILURE, error };
  }
};

function logout() {
  /*   managerService.logout(); */
  return { type: managersConstants.LOGOUT };
}

export const managersActions = {
  login,
  logout,
  register,
};

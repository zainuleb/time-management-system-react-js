import {
  GETUSERS_SUCCESS,
  GETUSERS_FAIL,
  ADDUSER_SUCCESS,
  ADDUSER_FAIL,
  DELUSER_SUCCESS,
  DELUSER_FAIL,
  EDITUSER_SUCCESS,
  EDITUSER_FAIL,
  SET_MESSAGE,
} from "../helpers/types";

import UserServices from "../services/user.services.js";

//Func to Get Users
export const getUsers = (token) => (dispatch) => {
  return UserServices.getUsers(token).then(
    (data) => {
      dispatch({
        type: GETUSERS_SUCCESS,
        payload: { users: data.users.data },
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: GETUSERS_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

//Func to Add Users
export const addUser = (data, token) => (dispatch) => {
  return UserServices.addUser(data, token).then(
    (data) => {
      dispatch({
        type: ADDUSER_SUCCESS,
        payload: { user: data },
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: ADDUSER_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

//Func to Update Users
export const updateUser = (id, data, token) => (dispatch) => {
  console.log(id, data, token);
  return UserServices.updateUser(id, data, token).then(
    (data) => {
      dispatch({
        type: EDITUSER_SUCCESS,
        payload: { user: data },
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: EDITUSER_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

//Func to Delete Users
export const delUser = (id, token) => (dispatch) => {
  return UserServices.delUser(id, token).then(
    (data) => {
      dispatch({
        type: DELUSER_SUCCESS,
        payload: { user: data },
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: DELUSER_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

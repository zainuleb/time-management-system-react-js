import {
  GETLOGS_SUCCESS,
  GETLOGS_FAIL,
  ADDLOG_SUCCESS,
  ADDLOG_FAIL,
  PATCHLOG_SUCCESS,
  PATCHLOG_FAIL,
  EDITLOG_SUCCESS,
  EDITLOG_FAIL,
  SET_MESSAGE,
} from "../helpers/types";

import LogServices from "../services/logs.services.js";

//Func to Get Logs
export const getLogs = (id, token) => (dispatch) => {
  return LogServices.getLogs(id, token).then(
    (data) => {
      dispatch({
        type: GETLOGS_SUCCESS,
        payload: { Logs: data },
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
        type: GETLOGS_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

//Func to Add Log
export const addLog = (token, data) => (dispatch) => {
  return LogServices.addLog(token, data).then(
    (data) => {
      dispatch({
        type: ADDLOG_SUCCESS,
        payload: { LOG: data },
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
        type: ADDLOG_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

//Func to Update Log
export const updateLog = (id, userId, data, token) => (dispatch) => {
  return LogServices.updateLog(id, userId, data, token).then(
    (data) => {
      dispatch({
        type: EDITLOG_SUCCESS,
        payload: { LOG: data },
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
        type: EDITLOG_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

//Func to Patch Working Hours in Logs
export const patchLog = (id, pref, token) => (dispatch) => {
  return LogServices.patchLog(id, parseInt(pref), token).then(
    (data) => {
      dispatch({
        type: PATCHLOG_SUCCESS,
        payload: { LOG: data },
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
        type: PATCHLOG_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

import axios from "axios";

const API_URL = "http://34.210.129.167/api/work-logs";

//Func to Get LOGs
const getLogs = (id, token) => {
  return axios
    .get(`http://34.210.129.167/api/user/${id}/work-logs`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      return response.data;
    });
};

//Func to Get Filtered LOGs
const getFilteredLogs = (start, end, token) => {
  return axios
    .get(`http://34.210.129.167/api/work-logs/${start}/${end}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      return response.data;
    });
};

//Func to Add LOG
const addLog = (data, token) => {
  return axios
    .post(
      "http://34.210.129.167/api/work-logs",
      {
        logDate: data.logDate,
        hours: data.hours,
        description: data.description,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((response) => {
      return response.data;
    });
};

//Func to Update LOG
const updateLog = (id, data, token) => {
  return axios
    .put(
      `http://34.210.129.167/api/user/15/work-logs/${id}`,
      {
        logDate: data.logDate,
        hours: data.hours,
        description: data.description,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((response) => {
      return response.data;
    });
};

//Func to Delete LOG
const delLog = (id, token) => {
  return axios
    .delete(API_URL + `/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      return response.data;
    });
};

// eslint-disable-next-line
export default {
  getLogs,
  getFilteredLogs,
  addLog,
  delLog,
  updateLog,
};

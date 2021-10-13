import axios from "axios";

//Func to Get LOGs
const getLogs = (id, token) => {
  return axios
    .get(`http://34.210.129.167/api/user/${id}/work-logs`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      return response.data.workLogs.data;
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
const addLog = (token, data) => {
  console.log(data, token);
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
      console.log(response);
      return response.data;
    });
};

//Func to Update LOG
const updateLog = (id, userId, data, token) => {
  return axios
    .put(
      `http://34.210.129.167/api/user/${userId}/work-logs/${id}`,
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
const patchLog = (id, pref, token) => {
  return axios
    .patch(
      `http://34.210.129.167/api/users/${id}/preferred-working-hours`,
      { workingHours: pref },
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

// eslint-disable-next-line
export default {
  getLogs,
  getFilteredLogs,
  addLog,
  patchLog,
  updateLog,
};

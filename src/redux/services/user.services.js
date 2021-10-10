import axios from "axios";

const API_URL = "http://34.210.129.167/api/users";

const getUsers = (token) => {
  return axios
    .get(API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      return response.data;
    });
};

const addUser = (data, token) => {
  return axios
    .post(
      API_URL,
      {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
        password_confirmation: data.password_confirmation,
        userType: data.userType,
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

const editUser = (id, data, token) => {
  console.log(id, token);
  return axios
    .put(
      API_URL + `/${id}`,
      {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
        password_confirmation: data.password_confirmation,
        userType: data.userType,
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

const delUser = (id, token) => {
  console.log(id, token);
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
  getUsers,
  addUser,
  delUser,
  editUser,
};

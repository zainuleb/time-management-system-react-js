import axios from "axios";

//Set base URL
const API_URL = "http://34.210.129.167/api/";

//Func to Register Manager
const register = (
  firstName,
  lastName,
  email,
  password,
  password_confirmation
) => {
  return axios.post(API_URL + "register", {
    firstName,
    lastName,
    email,
    password,
    password_confirmation,
  });
};

//Func to Login Manager
const login = (username, password) => {
  return axios
    .post(API_URL + "login", { email: username, password: password })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

//Func to LogOut Manager
const logout = () => {
  localStorage.removeItem("user");
};

// eslint-disable-next-line
export default {
  register,
  login,
  logout,
};

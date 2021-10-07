import axios from "axios";
/* import { authHeader } from "./auth.services.js"; */

async function login(username, pass) {
  //Get Login Response from API
  let response = await axios.post(
    `http://34.210.129.167/api/login`,
    { email: username, password: pass },
    {
      "Content-Type": "application/json",
      Accept: "*/*",
      "Accept-Encoding": "gzip, deflate, br",
      Connection: "keep-alive",
    }
  );

  //Extract Access Token and Expiry Time
  if (response.status === 200 && response.data.jwt && response.data.expireAt) {
    let jwt = response.data.jwt;
    let expire_at = response.data.expireAt;

    localStorage.setItem("access_token", jwt);
    localStorage.setItem("expire_at", expire_at);
  }
}

/* function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem("user");
} */

const register = async (user) => {
  let response = await axios.post(
    `http://34.210.129.167/api/login`,
    {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
      password_confirmation: user.password_confirmation,
    },
    {
      "Content-Type": "application/json",
      Accept: "*/*",
      "Accept-Encoding": "gzip, deflate, br",
      Connection: "keep-alive",
    }
  );

  console.log(response);
};

export const userService = {
  login,
  register,
};

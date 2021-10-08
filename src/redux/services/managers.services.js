import axios from "axios";
/* import { authHeader } from "./auth.services.js"; */

async function login(username, pass) {
  let managerData = {};
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
  if (
    response.status === 200 &&
    response.data.token &&
    response.data.expires_in
  ) {
    let token = response.data.token;
    let expires_in = response.data.expires_in;
    let token_type = response.data.token_type;

    managerData = {
      manager: response.data.user,
      token: token,
      token_type: token_type,
      expires_in: expires_in,
    };

    /*     localStorage.setItem("access_token", jwt);
    localStorage.setItem("expire_at", expire_at); */
  }

  return managerData;

  /*  console.log(managerData); */
}

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

/* const logout=async() {
  // remove user from local storage to log user out
  localStorage.removeItem("user");
}
 */
export const managersService = {
  login,
  register,
};

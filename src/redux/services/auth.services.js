export function authHeader() {
  // return authorization header with jwt token
  let manager = JSON.parse(localStorage.getItem("manager"));

  if (manager && manager.token) {
    return { Authorization: "Bearer " + manager.token };
  } else {
    return {};
  }
}

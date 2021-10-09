import { combineReducers } from "redux";
import { registration } from "./registration.reducer";
import { authentication, userGet } from "./managers.reducer";
import { alert } from "./alert.reducer";
import auth from "./auth";
import message from "./message";

const rootReducer = combineReducers({
  authentication,
  registration,
  userGet,
  alert,
  auth,
  message,
});

export default rootReducer;

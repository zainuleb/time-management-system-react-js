import { combineReducers } from "redux";
import { registration } from "./registration.reducer";
import { authentication, userGet } from "./managers.reducer";
import { alert } from "./alert.reducer";

const rootReducer = combineReducers({
  authentication,
  registration,
  userGet,
  alert,
});

export default rootReducer;

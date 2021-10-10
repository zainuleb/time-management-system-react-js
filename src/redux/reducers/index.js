import { combineReducers } from "redux";
import auth from "./auth";
import users from "./users.reducers";
import message from "./message";

const rootReducer = combineReducers({
  auth,
  message,
  users,
});

export default rootReducer;

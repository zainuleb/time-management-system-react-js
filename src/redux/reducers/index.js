import { combineReducers } from "redux";
import auth from "./auth.reducer.js";
import message from "./message.reducer.js";
import users from "./users.reducers.js";
import logs from "./logs.reducers.js";

const rootReducer = combineReducers({
  auth,
  message,
  users,
  logs,
});

export default rootReducer;

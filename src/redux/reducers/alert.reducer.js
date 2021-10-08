import { alertConstants } from "../constants/index.js";

const initialState = {
  message: "",
  type: "",
};

export function alert(state = initialState, action) {
  switch (action.type) {
    case alertConstants.SUCCESS:
      return {
        ...state,
        type: "alert-success",
        message: action.message,
      };
    case alertConstants.ERROR:
      return {
        ...state,
        type: "alert-danger",
        message: action.message,
      };
    case alertConstants.CLEAR:
      return {
        ...state,
        message: "",
        type: "",
      };
    default:
      return state;
  }
}

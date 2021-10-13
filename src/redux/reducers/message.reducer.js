import { SET_MESSAGE, CLEAR_MESSAGE } from "../helpers/types.js";

const initialState = {
  message:""
};

//Message Function
export default function message(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_MESSAGE:
      return { message: payload };

    case CLEAR_MESSAGE:
      return { message: "" };

    default:
      return state;
  }
}

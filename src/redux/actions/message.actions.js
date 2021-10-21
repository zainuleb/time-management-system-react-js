import { SET_MESSAGE, CLEAR_MESSAGE } from "../helpers/types";

//Set Message
export const setMessage = (message) => ({
  type: SET_MESSAGE,
  payload: message,
});

//Clear Message
export const clearMessage = () => ({
  type: CLEAR_MESSAGE,
});

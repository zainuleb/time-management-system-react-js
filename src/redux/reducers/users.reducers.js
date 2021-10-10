import { GETUSERS_SUCCESS, GETUSERS_FAIL } from "../actions/types.js";

const initialState = {
  users: null,
};

export default function users(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GETUSERS_SUCCESS:
      return {
        ...state,
        users: payload.users,
      };
    case GETUSERS_FAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
}

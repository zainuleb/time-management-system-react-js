import {
  GETLOGS_SUCCESS,
  GETLOGS_FAIL,
} from "../helpers/types.js";

const initialState = {
  logs: null,
};

//Users Functions
export default function logs(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GETLOGS_SUCCESS:
      return {
        ...state,
        logs: payload.Logs,
      };
    case GETLOGS_FAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
}

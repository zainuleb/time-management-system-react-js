import { managersConstants } from "../constants/index.js";

export function registration(state = {}, action) {
  switch (action.type) {
    case managersConstants.REGISTER_REQUEST:
      return { registering: true };
    case managersConstants.REGISTER_SUCCESS:
      return {};
    case managersConstants.REGISTER_FAILURE:
      return {};
    default:
      return state;
  }
}

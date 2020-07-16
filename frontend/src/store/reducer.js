import { INCREASE_COUNT, DECREASE_COUNT, ADD_POST } from "./types";

export default (state = {}, action) => {
  switch (action.type) {
    case INCREASE_COUNT:
      console.log(action.payload);
      return {
        ...state,
        count: action.payload + 1,
      };

    case DECREASE_COUNT:
      return {
        ...state,
        count: action.payload + 1,
      };

    case ADD_POST:
      return {
        ...state,
        state: action.payload,
      };

    default:
      return state;
  }
};

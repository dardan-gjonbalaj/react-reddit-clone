import { INCREASE_COUNT, DECREASE_COUNT, ADD_POST, SAVE_POST } from "./types";

export default (state = { count: 0, posts: {} }, action) => {
  switch (action.type) {
    case INCREASE_COUNT:
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
        posts: action.payload,
      };

    case SAVE_POST:
      console.log(action);

      return {
        ...state,
        saved: action.json,
      };

    default:
      return state;
  }
};

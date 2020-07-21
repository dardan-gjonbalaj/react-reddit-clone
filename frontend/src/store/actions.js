import { INCREASE_COUNT, DECREASE_COUNT, ADD_POST, SAVE_POST } from "./types";

export const increaseCount = (payload) => (dispatch) =>
  dispatch({
    type: INCREASE_COUNT,
    payload,
  });

export const decreaseCount = (payload) => (dispatch) =>
  dispatch({
    type: DECREASE_COUNT,
    payload,
  });

export const addPost = (payload) => (dispatch) => {
  console.log(payload);
  dispatch({
    type: ADD_POST,
    payload,
  });
};

export const savePost = (payload) => (dispatch) => {
  console.log(payload);
  dispatch({
    type: SAVE_POST,
    payload,
  });
};

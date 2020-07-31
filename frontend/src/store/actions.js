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

export function fetchPosts() {
  return (dispatch) => {
    fetch(`http://localhost:8000/frontpages`)
      .then((res) => res.json())
      .then((json) => {
        const {
          data: { children },
        } = json;
        const data = children.reduce((acc, curr) => {
          acc.push(curr.data);
          return acc;
        }, []);

        dispatch(addPost({ data }));
      })
      .catch((err) => {
        // redirect to 404
      });
  };
}

export const savePost = (payload) => (dispatch) => {
  console.log(payload);
  fetch(`http://localhost:8000/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ payload }),
  });
};

export function getSavedPosts() {
  return (dispatch) => {
    fetch(`http://localhost:8000/posts`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        dispatch({
          type: SAVE_POST,
          json,
        });
      });
  };
}

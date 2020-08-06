import { FETCH_COMMENTS, FETCH_COMMENTS_BY_ID, NEW_COMMENT } from "./types";

export const fetchCommentsById = ({ id }) => dispatch => {
  console.log("fetching post comments...");
  fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
    .then(res => res.json())
    .then(comments =>
      dispatch({
        type: FETCH_COMMENTS_BY_ID,
        payload: comments
      })
    );
};

export const fetchComments = () => dispatch => {
  console.log("fetching all comments...");
  fetch(`https://jsonplaceholder.typicode.com/comments`)
    .then(res => res.json())
    .then(comments =>
      dispatch({
        type: FETCH_COMMENTS,
        payload: comments
      })
    );
};

export const createComment = comment => {
  console.log("saving comment...");
  return {
    type: NEW_COMMENT,
    payload: comment
  };
};

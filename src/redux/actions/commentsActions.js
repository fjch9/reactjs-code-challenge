import { FETCH_COMMENTS, NEW_COMMENT } from "./types";

export const fetchComments = ({ id }) => dispatch => {
  console.log("fetching post comments...");
  fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
    .then(res => res.json())
    .then(comments =>
      dispatch({
        type: FETCH_COMMENTS,
        payload: comments
      })
    );
};

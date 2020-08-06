import { FETCH_POSTS } from "../actions/types";

const initialState = {
  items: []
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: payload
      };
    default:
      return state;
  }
}

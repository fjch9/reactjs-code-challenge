import { FETCH_COMMENTS, NEW_COMMENT } from "../actions/types";

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_COMMENTS:
      return {
        ...state,
        items: payload
      };
    case NEW_COMMENT:
      return {
        ...state,
        items: [...state.comments, payload.commentData]
      };
    default:
      return state;
  }
}

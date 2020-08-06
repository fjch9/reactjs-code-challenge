import {
  FETCH_COMMENTS,
  NEW_COMMENT,
  FETCH_COMMENTS_BY_ID
} from "../actions/types";

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
    case FETCH_COMMENTS_BY_ID:
      return {
        ...state,
        items: payload
      };
    case NEW_COMMENT:
      return {
        ...state,
        items: [...state.items, payload.comment]
      };
    default:
      return state;
  }
}

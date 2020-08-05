import { FETCH_COMMENTS } from "../actions/types";

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
    default:
      return state;
  }
}

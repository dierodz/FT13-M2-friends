import { SET_LIST } from "../actions/names";

const initialState = {
  list: undefined,
}

export default function reducer(state = initialState, {type, payload}) {
  switch (type) {
    case SET_LIST: return {
      ...state,
      list: payload,
    }
    default: return state;
  }
}
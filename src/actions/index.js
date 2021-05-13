import axios from "axios";
import { SET_LIST } from "./names";

export function setList() {
  return function (dispatch) {
    axios.get('http://jsonplaceholder.typicode.com/users')
      .then(response => dispatch({
        type: SET_LIST,
        payload: response.data
      }))
  }
}
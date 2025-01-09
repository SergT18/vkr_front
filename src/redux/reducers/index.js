import { combineReducers } from "redux";

const reducers = ["dialogs", "messages", "attachments", "user"];

export default combineReducers(
    reducers.reduce((initial, name) => {
      initial[name] = require(`./${name}`).default;
      return initial;
    }, {})
  );
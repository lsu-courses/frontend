import { combineReducers } from "redux";

import search from "redux/ducks/search";
import saved from "redux/ducks/saved";

export default combineReducers({
  search,
  saved
});

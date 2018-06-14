import { combineReducers } from "redux";

import user from "./userReducer";
import clips from "./clipsReducer";

const reducers = combineReducers({
  user: user,
  clips: clips
})

export default reducers;

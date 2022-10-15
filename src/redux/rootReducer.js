import { combineReducers } from "redux";
import filterReducer from "./filters/reducer";
import blogReducer from "./blogs/reducer";

const rootReducer = combineReducers({
    blogs: blogReducer,
    filters: filterReducer,
});

export default rootReducer;

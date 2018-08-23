import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import authReducer from "./authReducre";

export default combineReducers({
    users: usersReducer,
    auth: authReducer
});
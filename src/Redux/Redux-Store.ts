import {combineReducers, createStore} from "redux";
import {dialogPage} from "./DialogPage-Reducer";
import {profilePage} from "./Profile-Reducer";

const allReducers = combineReducers({
    profilePage,
    dialogPage
})
export const store = createStore(allReducers)
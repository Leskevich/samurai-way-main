import {combineReducers, createStore} from "redux";
import {dialogPage} from "./DialogPage-Reducer";
import {profilePage} from "./Profile-Reducer";

const rootReducers = combineReducers({
    profilePage,
    dialogPage
})

type rootReducersType = typeof rootReducers
export type stateType = ReturnType<rootReducersType>

export const store = createStore(rootReducers)
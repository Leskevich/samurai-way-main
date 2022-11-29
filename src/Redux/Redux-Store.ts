import {combineReducers, createStore} from "redux";
import {dialogPage} from "./DialogPage-Reducer";
import {profilePage} from "./Profile-Reducer";
import {UsersReducer} from "./Users-Reducer";

const rootReducers = combineReducers({
    profilePage,
    dialogPage,
    usersPage:UsersReducer
})

type rootReducersType = typeof rootReducers
export type stateType = ReturnType<rootReducersType>

export const store = createStore(rootReducers)
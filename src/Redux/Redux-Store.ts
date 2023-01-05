import {combineReducers, createStore} from "redux";
import {dialogPage} from "./DialogPage-Reducer";
import {profilePage} from "./Profile-Reducer";
import {UsersReducer} from "./Users-Reducer";
import {AuthReducer} from "./Auth-Reduser";

const rootReducers = combineReducers({
    profilePage,
    dialogPage,
    usersPage:UsersReducer,
    Auth:AuthReducer,
})

type rootReducersType = typeof rootReducers
export type stateType = ReturnType<rootReducersType>

export const store = createStore(rootReducers)
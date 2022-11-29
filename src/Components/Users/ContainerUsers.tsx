import React from 'react';
import {Users} from "./Users";
import {connect} from "react-redux";
import {stateType} from "../../Redux/Redux-Store";
import {Dispatch} from "redux";
import {follow, unFollow, UserType} from "../../Redux/Users-Reducer";

export type UserPropsType = mapStateToPropsType & mapDispatchToPropsType
type mapStateToPropsType = {
    users: UserType[]
}
type mapDispatchToPropsType = {
    follow: (userId: string) => void
    unFollow: (userId: string) => void
}

const mapStateToProps = (state: stateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch: (Dispatch)): mapDispatchToPropsType => {
    return {
        follow: (userId: string) => {
            dispatch(follow(userId))
        },
        unFollow: (userId: string) => {
            dispatch(unFollow(userId))
        }

    }
}

export const ContainerUsers = connect(mapStateToProps, mapDispatchToProps)(Users)



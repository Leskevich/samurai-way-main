import React from 'react';

import {connect} from "react-redux";
import {stateType} from "../../Redux/Redux-Store";
import {Dispatch} from "redux";
import {follow, setUsers, unFollow, UserType} from "../../Redux/Users-Reducer";
import {UsersC} from "./UsersС";



export type UserPropsType = mapStateToPropsType & mapDispatchToPropsType
type mapStateToPropsType = {
    users: UserType[]
}
type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers:(users:UserType[])=>void
}

const mapStateToProps = (state: stateType): mapStateToPropsType => {
    return {
        users: state.usersPage.items
    }
}
const mapDispatchToProps = (dispatch: (Dispatch)): mapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(follow(userId))
        },
        unFollow: (userId: number) => {
            dispatch(unFollow(userId))
        },
        setUsers:(users:UserType[])=>{
            dispatch(setUsers(users))
        }

    }
}

export const ContainerUsers = connect(mapStateToProps, mapDispatchToProps)(UsersC)



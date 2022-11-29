import React from 'react';
import {MyPosts} from "./MyPosts";
import {AddPostAC, statePostType, UpdateNewPostAC} from "../../../Redux/Profile-Reducer";

import {stateType} from "../../../Redux/Redux-Store";
import {connect} from "react-redux";
import {Dispatch} from "redux";


type MapStateToPropsType = {
    postData: statePostType[]
    textNewPost: string
}
type mapDispatchToPropsType = {
    addNewPost: () => void
    updatePost: (text: string) => void
}
export type MyPostType = MapStateToPropsType & mapDispatchToPropsType
const mapStateToProps = (state: stateType): MapStateToPropsType => {
    return {
        postData: state.profilePage.posts,
        textNewPost: state.profilePage.textNewPost
    }
}
const mapDispatchToProps = (dispatch: (Dispatch)): mapDispatchToPropsType => {
    return {
        addNewPost: () => {
            dispatch(AddPostAC())
        },
        updatePost: (text: string) => {
            dispatch(UpdateNewPostAC(text))
        }
    }
}


export const ContainerMyPost = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


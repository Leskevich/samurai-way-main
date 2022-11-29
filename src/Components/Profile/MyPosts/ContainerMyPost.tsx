import React from 'react';
import {MyPosts} from "./MyPosts";
import {AddPostAC, ProfileReducerType, statePostType, UpdateNewPostAC} from "../../../Redux/Profile-Reducer";

import {stateType} from "../../../Redux/Redux-Store";
import {connect} from "react-redux";



type MapStateToPropsType={
    postData: statePostType[]
    textNewPost:string
}
const mapStateToProps = (state: stateType):MapStateToPropsType => {
    return {
        postData: state.profilePage.posts,
        textNewPost: state.profilePage.textNewPost
    }
}
const mapDispatchToProps = (dispatch: (action: ProfileReducerType) => void) => {
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


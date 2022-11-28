import React from 'react';
import {MyPosts} from "./MyPosts";
import {AddPostAC, ProfileReducerType, UpdateNewPostAC} from "../../../Redux/Profile-Reducer";

import {stateType} from "../../../Redux/Redux-Store";
import {connect} from "react-redux";


const mapStateToProps = (state: stateType) => {
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


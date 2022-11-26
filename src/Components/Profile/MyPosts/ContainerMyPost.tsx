import React from 'react';
import {MyPosts} from "./MyPosts";
import {AddPostAC, UpdateNewPostAC} from "../../../Redux/Profile-Reducer";

import {store} from "../../../Redux/Redux-Store";

type ContainerMyPostType = {

}

export const ContainerMyPost = ({}:ContainerMyPostType) => {
    const state = store.getState().profilePage
    const addNewPost = () => {
            store.dispatch(AddPostAC())
    }
    const updatePost = (text:string) => {

            store.dispatch(UpdateNewPostAC(text))

    }

    return (
        <MyPosts
            postData={state.posts}
            textNewPost={state.textNewPost}
            addNewPost={addNewPost}
            updatePost={updatePost}
        />
    );
};


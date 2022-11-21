import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

import {profilePageType} from "../../Redux/State";

type profileType = {
    state: profilePageType
    addPost: () => void
}


export const Profile = ({state, addPost}: profileType) => {
    return (
        <div className={s.Profile}>
            <div>
                <ProfileInfo/>
            </div>
            <div>
                <MyPosts
                    postData={state.posts}
                    addPost={addPost}
                    textNewPost={state.textNewPost}
                />
            </div>
        </div>
    );
};


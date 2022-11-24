import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

import {ActionType, profilePageType} from "../../Redux/State";

type profileType = {
    state: profilePageType
    dispatch:(action:ActionType)=>void
}


export const Profile = ({state, dispatch}: profileType) => {
    return (
        <div className={s.Profile}>
            <div>
                <ProfileInfo/>
            </div>
            <div>
                <MyPosts
                    postData={state.posts}
                    textNewPost={state.textNewPost}
                    dispatch={dispatch}
                />
            </div>
        </div>
    );
};


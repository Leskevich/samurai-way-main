import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

import {profilePageType} from "../../Redux/State";

type profileType = {
    state: profilePageType
}


export const Profile = ({state}: profileType) => {
    return (
        <div className={s.Profile}>
            <div>
                <ProfileInfo/>
            </div>
            <div>
                <MyPosts postData={state.posts}/>
            </div>
        </div>
    );
};


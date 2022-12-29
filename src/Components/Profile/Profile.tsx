import React from 'react';
import s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ContainerMyPost} from "./MyPosts/ContainerMyPost";
import {userProfileType} from "../../Redux/Profile-Reducer";

type profileType = {
    profile: userProfileType | null

}


export const Profile = (props: profileType) => {
const {profile}=props
    return (
        <div className={s.Profile}>
            <div>
                <ProfileInfo profile={profile}/>
            </div>
            <div>
                <ContainerMyPost/>
            </div>
        </div>
    );
};


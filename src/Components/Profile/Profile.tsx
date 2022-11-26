import React from 'react';
import s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ContainerMyPost} from "./MyPosts/ContainerMyPost";

type profileType = {}


export const Profile = ({}: profileType) => {

    return (
        <div className={s.Profile}>
            <div>
                <ProfileInfo/>
            </div>
            <div>
                <ContainerMyPost/>
            </div>
        </div>
    );
};


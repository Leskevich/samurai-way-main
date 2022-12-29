import React from 'react';
import {userProfileType} from "../../../Redux/Profile-Reducer";

type profileInfoType = {
    profile: userProfileType | null

}

export const ProfileInfo = (props: profileInfoType) => {
    const {profile} = props

    return (
        <div>
            <div>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1VWPvGxGbsNquVt-BGE2P1DALIT_moFJ_BQ&usqp=CAU"
                    alt=""/>
            </div>
            <div>
                <img src={profile?.photos.large} alt="photoUser"/>
                <div>
                    {profile?.fullName}
                </div>
                <div>
                    {profile?.aboutMe}
                </div>
            </div>
        </div>
    );
};


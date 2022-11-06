import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <div className={s.Profile}>
            <div>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1VWPvGxGbsNquVt-BGE2P1DALIT_moFJ_BQ&usqp=CAU"
                    alt=""/>
            </div>
            <div>
                ava+description
            </div>
            <div>
                <MyPosts/>
            </div>
        </div>
    );
};


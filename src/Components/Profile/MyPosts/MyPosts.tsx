import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Posts/Post";

export const MyPosts = () => {
    return (
        <div className={s.MyPost}>

            <div>
                my post
            </div>
            <div>
                add post
            </div>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    );
};

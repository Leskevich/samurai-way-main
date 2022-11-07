import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Posts/Post";

export const MyPosts = () => {
    return (
        <div className={s.MyPost}>
            <div>
                <textarea/>
            </div>
            <div>
                <button>add Post</button>
            </div>
            <Post textPost='post1' like={4}/>
            <Post textPost='2post' like={6}/>
        </div>
    );
};


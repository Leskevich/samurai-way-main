import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Posts/Post";
import {statePostType} from "../../../Redux/State";



type MyPostsType = {
    postData:  statePostType[]
}

export const MyPosts = ({postData}: MyPostsType) => {
    let postDataMap = postData.map(el => <Post key={el.id} id={el.id} textPost={el.textPost} like={el.like}/>)
    return (
        <div className={s.MyPost}>
            <div>
                <textarea/>
            </div>
            <div>
                <button>add Post</button>
            </div>
            <div>
                {postDataMap}
            </div>
        </div>
    );
};


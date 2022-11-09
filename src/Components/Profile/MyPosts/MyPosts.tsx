import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Posts/Post";

type postDataType = {
    id: number,
    textPost: string,
    like: number
}
const postData: postDataType[] = [
    {id: 1, textPost: 'post1', like: 4},
    {id: 2, textPost: 'post2', like: 5},
]
let postDataMap = postData.map(el => <Post id={el.id} textPost={el.textPost} like={el.like}/>)
export const MyPosts = () => {
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


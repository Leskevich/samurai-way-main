import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Posts/Post";
import {statePostType} from "../../../Redux/State";


type MyPostsType = {
    postData: statePostType[]
    addPost: (text: string) => void
}

export const MyPosts = ({postData, addPost}: MyPostsType) => {
    const postDataMap = postData.map(el => <Post key={el.id} id={el.id} textPost={el.textPost} like={el.like}/>)
    let netTextPost = React.createRef<HTMLTextAreaElement>()

    const addNewPost = () => {
        if (netTextPost.current) {
            addPost(netTextPost.current.value)
        }
    }

    return (
        <div className={s.MyPost}>
            <div>
                <textarea ref={netTextPost}></textarea>
            </div>
            <div>
                <button onClick={addNewPost}>add Post</button>
            </div>
            <div>
                {postDataMap}
            </div>
        </div>
    );
};

